import React from 'react'

import { SubcategoryIdEnum, VenueTypeCodeKey } from 'api/gen'
import { useOfferModule } from 'features/home/api/useOfferModule'
import { useVenueModule } from 'features/home/api/useVenueModule'
import { HomeModule } from 'features/home/components/modules/HomeModule'
import {
  formattedExclusivityModule,
  formattedOffersModule,
  formattedVenuesModule,
} from 'features/home/fixtures/homepage.fixture'
import { SearchHit, VenueHit } from 'libs/search'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { render, screen } from 'tests/utils'

let mockedHomeTypes = {}
jest.mock('features/home/types', () => {
  const actual = jest.requireActual('features/home/types')
  return { ...actual, ...mockedHomeTypes }
})

jest.mock('features/home/api/useOfferModule')
const mockUseOfferModule = useOfferModule as jest.MockedFunction<typeof useOfferModule>

jest.mock('features/home/api/useVenueModule')
const mockUseVenuesModule = useVenueModule as jest.MockedFunction<typeof useVenueModule>

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

const VenueHitFixture: VenueHit[] = [
  {
    accessibility: {
      audioDisability: true,
      mentalDisability: false,
      motorDisability: false,
      visualDisability: false,
    },
    bannerUrl: undefined,
    contact: { email: undefined, phoneNumber: undefined, socialMedias: {}, website: undefined },
    description: '',
    id: 1,
    latitude: 48.59848,
    longitude: 7.76616,
    name: 'ADIDAS FRANCE',
    publicName: 'ADIDAS FRANCE',
    venueTypeCode: VenueTypeCodeKey.ARTISTIC_COURSE,
  },
  {
    accessibility: {
      audioDisability: true,
      mentalDisability: false,
      motorDisability: false,
      visualDisability: false,
    },
    contact: { email: undefined, phoneNumber: undefined, socialMedias: {}, website: undefined },
    description: '',
    id: 2,
    latitude: 48.59848,
    longitude: 7.76616,
    name: 'ADIDAS FRANCE',
    publicName: 'ADIDAS FRANCE',
    venueTypeCode: VenueTypeCodeKey.ARTISTIC_COURSE,
  },
]

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
  it('should return an Venues Module', () => {
    mockedHomeTypes = {
      isVenuesModule: () => true,
    }
    mockUseVenuesModule.mockReturnValueOnce(VenueHitFixture)
    render(<HomeModule item={formattedVenuesModule} homeEntryId="fake-id" index={2} />, {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      wrapper: ({ children }) => reactQueryProviderHOC(children),
    })

    const testID = screen.getAllByTestId('venue-type-tile')
    expect(testID).toBeTruthy()
  })
  it('should return an Exclusivity Module', () => {
    mockedHomeTypes = {
      isExclusivityModule: () => true,
    }
    mockUseVenuesModule.mockReturnValueOnce(VenueHitFixture)
    render(<HomeModule item={formattedExclusivityModule} homeEntryId="fake-id" index={1} />, {
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      wrapper: ({ children }) => reactQueryProviderHOC(children),
    })

    const testID = screen.getByTestId('exclusivity-module')
    expect(testID).toBeTruthy()
  })
})
