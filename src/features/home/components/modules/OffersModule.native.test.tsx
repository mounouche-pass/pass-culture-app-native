import mockdate from 'mockdate'
import React from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

import { OffersModuleParameters } from 'features/home/types'
import { transformHit } from 'libs/algolia'
import { mockedAlgoliaHitsResponse } from 'libs/algolia/__mocks__/mockedAlgoliaHitResponse'
import { analytics } from 'libs/analytics'
import { DisplayParametersFields, ContentTypes } from 'libs/contentful/types'
import { placeholderData } from 'libs/subcategories/placeholderData'
import { Offer } from 'shared/offer/types'
import { act, fireEvent, render } from 'tests/utils'

import { OffersModule } from './OffersModule'

mockdate.set(new Date(2020, 10, 16))

const props = {
  search: [{} as OffersModuleParameters],
  display: {
    minOffers: 0,
    title: 'Module title',
    layout: 'one-item-medium',
  } as DisplayParametersFields,
  moduleId: 'fakeModuleId',
  cover: null,
  position: null,
  homeEntryId: 'fakeEntryId',
  index: 1,
}

const nativeEventEnd = {
  layoutMeasurement: { width: 1000 },
  contentOffset: { x: 900 },
  contentSize: { width: 1600 },
} as NativeSyntheticEvent<NativeScrollEvent>['nativeEvent']

const mockHits = mockedAlgoliaHitsResponse.hits.map(transformHit('fakeUrlPrefix')) as Offer[]
let mockNbHits = mockedAlgoliaHitsResponse.nbHits
jest.mock('features/home/api/useOfferModule', () => ({
  useOfferModule: jest.fn(() => ({ hits: mockHits, nbHits: mockNbHits })),
}))
jest.mock('react-query')
jest.mock('features/auth/context/AuthContext')

const mockSubcategories = placeholderData.subcategories
const mockHomepageLabels = placeholderData.homepageLabels
jest.mock('libs/subcategories/useSubcategories', () => ({
  useSubcategories: () => ({
    data: {
      subcategories: mockSubcategories,
      homepageLabels: mockHomepageLabels,
    },
  }),
}))

describe('OffersModule component', () => {
  it('should render correctly', () => {
    const component = render(<OffersModule {...props} index={1} />)
    expect(component).toMatchSnapshot()
  })
})

describe('OffersModule component - Analytics', () => {
  it('should trigger logEvent "AllTilesSeen" only once', async () => {
    const component = render(<OffersModule {...props} index={1} />)
    const scrollView = component.getByTestId('offersModuleList')

    await act(async () => {
      // 1st scroll to last item => trigger
      await scrollView.props.onScroll({ nativeEvent: nativeEventEnd })
    })
    expect(analytics.logAllTilesSeen).toHaveBeenCalledWith(props.display.title, mockNbHits)
    expect(analytics.logAllTilesSeen).toHaveBeenCalledTimes(1)

    scrollView.props.onScroll({ nativeEvent: nativeEventEnd })
    expect(analytics.logAllTilesSeen).toHaveBeenCalledTimes(1)
  })

  it('should trigger logEvent "ModuleDisplayedOnHomepage" when shouldModuleBeDisplayed is true', () => {
    render(<OffersModule {...props} />)

    expect(analytics.logModuleDisplayedOnHomepage).toHaveBeenNthCalledWith(
      1,
      props.moduleId,
      ContentTypes.ALGOLIA,
      props.index,
      props.homeEntryId
    )
  })

  it('should trigger logEvent "ModuleDisplayedOnHomepage" when shouldModuleBeDisplayed is false', () => {
    render(
      <OffersModule
        {...props}
        search={[{ title: 'Search title' } as OffersModuleParameters]}
        display={{ ...props.display, minOffers: mockNbHits + 1 }}
        index={1}
      />
    )

    expect(analytics.logModuleDisplayedOnHomepage).not.toHaveBeenCalled()
  })

  it('should trigger logEvent "SeeMoreHasBeenClicked" when we click on See More', () => {
    mockNbHits = 10
    const component = render(<OffersModule {...props} index={1} />)

    act(() => {
      fireEvent.press(component.getByText('En voir plus'))
    })

    expect(analytics.logClickSeeMore).toHaveBeenCalledWith({
      moduleId: 'fakeModuleId',
      moduleName: 'Module title',
    })
  })
})
