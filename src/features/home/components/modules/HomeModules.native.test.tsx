import React from 'react'

import { SubcategoryIdEnum } from 'api/gen'
import { useOfferModule } from 'features/home/api/useOfferModule'
import { HomeModule } from 'features/home/components/modules/HomeModule'
import { formattedOffersModule } from 'features/home/fixtures/homepage.fixture'
import { SearchHit } from 'libs/search'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { render, screen } from 'tests/utils'

let mockedHomeTypes = {}
jest.mock('features/home/types', () => {
  const actual = jest.requireActual('features/home/types')
  return { ...actual, ...mockedHomeTypes }
})

jest.mock('features/home/api/useOfferModule')

const mockUseOfferModule = useOfferModule as jest.MockedFunction<typeof useOfferModule>

const SearchHitFixture: { hits: SearchHit[]; nbHits: number } = {
  hits: [
    {
      _geoloc: { lat: null, lng: null },
      objectID: '8706',
      offer: {
        dates: [],
        isDigital: true,
        isDuo: false,
        isEducational: false,
        name: 'Mensch ! Où sont les Hommes ?',
        prices: [2500],
        subcategoryId: SubcategoryIdEnum.ABO_BIBLIOTHEQUE,
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets-fine-grained/thumbs/mediations/CMLQ_1',
      },
    },
  ],
  nbHits: 1,
}
describe('HomeModules', () => {
  it('should return an Offer Module', () => {
    mockedHomeTypes = {
      isOffersModule: () => true,
    }
    mockUseOfferModule.mockReturnValueOnce(SearchHitFixture)
    render(<HomeModule item={formattedOffersModule} homeEntryId="fake-id" index={1} />, {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      wrapper: ({ children }) => reactQueryProviderHOC(children),
    })

    const testID = screen.getByTestId('offersModuleList')
    expect(testID).toBeTruthy()
  })
})
