import flatten from 'lodash.flatten'

import { SearchState } from 'features/search/types'
import { captureAlgoliaError } from 'libs/algolia/fetchAlgolia/AlgoliaError'
import { buildOfferSearchParameters } from 'libs/algolia/fetchAlgolia/buildAlgoliaParameters/buildOfferSearchParameters.ts'
import { offerAttributesToRetrieve } from 'libs/algolia/fetchAlgolia/buildAlgoliaParameters/offerAttributesToRetrieve'
import { client } from 'libs/algolia/fetchAlgolia/clients'
import { buildHitsPerPage } from 'libs/algolia/fetchAlgolia/utils'
import { env } from 'libs/environment'
import { GeoCoordinates } from 'libs/geolocation'
import { SearchHit } from 'libs/search'

type FetchMultipleOffersArgs = {
  paramsList: SearchState[]
  userLocation: GeoCoordinates | null
  isUserUnderage: boolean
}

export const fetchMultipleOffers = async ({
  paramsList,
  userLocation,
  isUserUnderage,
}: FetchMultipleOffersArgs): Promise<{ hits: SearchHit[]; nbHits: number }> => {
  const queries = paramsList.map((params) => ({
    indexName: env.ALGOLIA_OFFERS_INDEX_NAME,
    query: params.query,
    params: {
      ...buildHitsPerPage(params.hitsPerPage),
      ...buildOfferSearchParameters(params, userLocation, isUserUnderage),
      attributesToHighlight: [], // We disable highlighting because we don't need it
      attributesToRetrieve: offerAttributesToRetrieve,
    },
  }))

  try {
    // const response = await client.multipleQueries<SearchHit>(queries)
    const response = {
      results: [
        {
          hits: [
            {
              offer: {
                dates: [1661018400, 1661018400],
                isDigital: false,
                isDuo: true,
                isEducational: false,
                name: 'Concert de guitare',
                prices: [20, 30],
                subcategoryId: 'CONCERT',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AZPQ',
              },
              _geoloc: { lat: 48.84217, lng: 2.30085 },
              objectID: '2399',
            },
            {
              offer: {
                dates: [1661018400],
                isDigital: false,
                isDuo: true,
                isEducational: false,
                name: 'Нет войне / Stop the War in Ukraine!',
                prices: [20],
                subcategoryId: 'CONCERT',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AZ8Q',
              },
              _geoloc: { lat: 48.84217, lng: 2.30085 },
              objectID: '2398',
            },
            {
              offer: {
                dates: [1661018400],
                isDigital: false,
                isDuo: true,
                isEducational: false,
                name: 'Concert de guitare - Tarif 16 ans - 15 euros',
                prices: [30],
                subcategoryId: 'CONCERT',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AZPA',
              },
              _geoloc: { lat: 48.84217, lng: 2.30085 },
              objectID: '2394',
            },
            {
              offer: {
                dates: [],
                isDigital: true,
                isDuo: false,
                isEducational: false,
                name: "Dansons jusqu'en 2030",
                prices: [4],
                subcategoryId: 'ABO_PLATEFORME_MUSIQUE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AYXQ',
              },
              _geoloc: { lat: 47.158459, lng: 2.409289 },
              objectID: '2314',
            },
            {
              offer: {
                dates: [],
                isDigital: false,
                isDuo: false,
                isEducational: false,
                name: 'QXsFXPkBvMRrZwTCyoYJTtt9',
                prices: [48],
                subcategoryId: 'SUPPORT_PHYSIQUE_MUSIQUE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AYWA',
              },
              _geoloc: { lat: 48.92643, lng: 2.43228 },
              objectID: '2310',
            },
            {
              offer: {
                dates: [1658347200, 1659470400],
                isDigital: false,
                isDuo: true,
                isEducational: false,
                name: 'A fond le fond',
                prices: [19, 20],
                subcategoryId: 'LIVESTREAM_MUSIQUE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AYQA',
              },
              _geoloc: { lat: 4.92525, lng: -52.31159 },
              objectID: '2295',
            },
            {
              offer: {
                dates: [1658347200, 1659470400],
                isDigital: false,
                isDuo: true,
                isEducational: false,
                name: "A quand l'augustinade",
                prices: [41, 41],
                subcategoryId: 'FESTIVAL_MUSIQUE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AYEA',
              },
              _geoloc: { lat: 48.92643, lng: 2.43228 },
              objectID: '2265',
            },
          ],
          nbHits: 7,
          page: 0,
          nbPages: 1,
          hitsPerPage: 8,
          exhaustiveNbHits: true,
          exhaustiveTypo: true,
          query: '',
          params:
            'hitsPerPage=8&facetFilters=%5B%5B%22offer.isEducational%3Afalse%22%5D%2C%5B%22offer.searchGroupName%3AMUSIQUE%22%5D%5D&numericFilters=%5B%5B%22offer.prices%3A%200%20TO%20300%22%5D%5D&attributesToHighlight=%5B%5D&attributesToRetrieve=%5B%22offer.dates%22%2C%22offer.isDigital%22%2C%22offer.isDuo%22%2C%22offer.isEducational%22%2C%22offer.name%22%2C%22offer.prices%22%2C%22offer.subcategoryId%22%2C%22offer.thumbUrl%22%2C%22objectID%22%2C%22_geoloc%22%5D',
          index: 'TESTING',
          processingTimeMS: 1,
        },
        {
          hits: [
            {
              offer: {
                dates: [],
                isDigital: false,
                isDuo: false,
                isEducational: false,
                name: 'Product 9',
                prices: [40],
                subcategoryId: 'LIVRE_PAPIER',
                thumbUrl: null,
              },
              _geoloc: { lat: 48.87004, lng: 2.3785 },
              objectID: '2370',
            },
            {
              offer: {
                dates: [],
                isDigital: false,
                isDuo: false,
                isEducational: false,
                name: 'Нет войне / Stop the War in Ukraine!',
                prices: [20],
                subcategoryId: 'LIVRE_PAPIER',
                thumbUrl: null,
              },
              _geoloc: { lat: 48.87004, lng: 2.3785 },
              objectID: '2369',
            },
            {
              offer: {
                dates: [],
                isDigital: true,
                isDuo: false,
                isEducational: false,
                name: 'En rentrant de Palerme',
                prices: [35],
                subcategoryId: 'ABO_LIVRE_NUMERIQUE',
                thumbUrl: null,
              },
              _geoloc: { lat: 47.158459, lng: 2.409289 },
              objectID: '2352',
            },
            {
              offer: {
                dates: [],
                isDigital: true,
                isDuo: false,
                isEducational: false,
                name: 'Allo Maman ici Groucho',
                prices: [30],
                subcategoryId: 'LIVRE_NUMERIQUE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AZDA',
              },
              _geoloc: { lat: 47.158459, lng: 2.409289 },
              objectID: '2343',
            },
            {
              offer: {
                dates: [],
                isDigital: true,
                isDuo: false,
                isEducational: false,
                name: 'HZUWGMzLRvyuGFBwG3m',
                prices: [28],
                subcategoryId: 'TELECHARGEMENT_LIVRE_AUDIO',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AY5Q',
              },
              _geoloc: { lat: 47.158459, lng: 2.409289 },
              objectID: '2329',
            },
            {
              offer: {
                dates: [],
                isDigital: false,
                isDuo: false,
                isEducational: false,
                name: 'Ha!',
                prices: [30],
                subcategoryId: 'LIVRE_PAPIER',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AYTQ',
              },
              _geoloc: { lat: 48.91683, lng: 2.43884 },
              objectID: '2304',
            },
          ],
          nbHits: 6,
          page: 0,
          nbPages: 1,
          hitsPerPage: 10,
          exhaustiveNbHits: true,
          exhaustiveTypo: true,
          query: '',
          params:
            'hitsPerPage=10&facetFilters=%5B%5B%22offer.isEducational%3Afalse%22%5D%2C%5B%22offer.searchGroupName%3ALIVRE%22%5D%5D&numericFilters=%5B%5B%22offer.prices%3A%200%20TO%20300%22%5D%5D&attributesToHighlight=%5B%5D&attributesToRetrieve=%5B%22offer.dates%22%2C%22offer.isDigital%22%2C%22offer.isDuo%22%2C%22offer.isEducational%22%2C%22offer.name%22%2C%22offer.prices%22%2C%22offer.subcategoryId%22%2C%22offer.thumbUrl%22%2C%22objectID%22%2C%22_geoloc%22%5D',
          index: 'TESTING',
          processingTimeMS: 1,
        },
        {
          hits: [
            {
              offer: {
                dates: [],
                isDigital: true,
                isDuo: false,
                isEducational: false,
                name: 'Ai que bom !',
                prices: [0],
                subcategoryId: 'CINE_VENTE_DISTANCE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AZCQ',
              },
              _geoloc: { lat: 47.158459, lng: 2.409289 },
              objectID: '2341',
            },
            {
              offer: {
                dates: [],
                isDigital: true,
                isDuo: false,
                isEducational: false,
                name: 'Нет войне / Stop the War in Ukraine!',
                prices: [0],
                subcategoryId: 'CINE_VENTE_DISTANCE',
                thumbUrl: '/passculture-metier-ehp-testing-assets/thumbs/mediations/AYSQ',
              },
              _geoloc: { lat: 47.158459, lng: 2.409289 },
              objectID: '2301',
            },
          ],
          nbHits: 6,
          page: 0,
          nbPages: 3,
          hitsPerPage: 2,
          exhaustiveNbHits: true,
          exhaustiveTypo: true,
          query: '',
          params:
            'hitsPerPage=2&facetFilters=%5B%5B%22offer.isEducational%3Afalse%22%5D%2C%5B%22offer.searchGroupName%3ACINEMA%22%5D%5D&numericFilters=%5B%5B%22offer.prices%3A%200%20TO%20300%22%5D%5D&attributesToHighlight=%5B%5D&attributesToRetrieve=%5B%22offer.dates%22%2C%22offer.isDigital%22%2C%22offer.isDuo%22%2C%22offer.isEducational%22%2C%22offer.name%22%2C%22offer.prices%22%2C%22offer.subcategoryId%22%2C%22offer.thumbUrl%22%2C%22objectID%22%2C%22_geoloc%22%5D',
          index: 'TESTING',
          processingTimeMS: 1,
        },
      ],
    }
    const { results } = response
    return {
      hits: flatten(results.map(({ hits }) => hits)),
      nbHits: results.reduce((prev, curr) => prev + curr.nbHits, 0),
    }
  } catch (error) {
    captureAlgoliaError(error)
    return { hits: [] as SearchHit[], nbHits: 0 }
  }
}
