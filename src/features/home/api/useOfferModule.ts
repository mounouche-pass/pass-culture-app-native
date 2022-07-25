import uniqBy from 'lodash.uniqby'
import { useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'

import { SearchParametersFields } from 'features/home/contentful'
import { useUserProfileInfo } from 'features/profile/api'
import { useIsUserUnderage } from 'features/profile/utils'
import { SearchState } from 'features/search/types'
import {
  fetchMultipleOffers,
  filterOfferHit,
  useTransformOfferHits,
} from 'libs/algolia/fetchAlgolia'
import { useGeolocation } from 'libs/geolocation'
import { useNetInfo } from 'libs/network/useNetInfo'
import { QueryKeys } from 'libs/queryKeys'
import { SearchHit, useParseSearchParameters } from 'libs/search'

const isSearchState = (parameter: unknown): parameter is SearchState =>
  typeof parameter === 'object' && parameter !== null

interface UseOfferModuleProps {
  search: SearchParametersFields[]
  moduleId: string
}

const toto = {
  hits: [
    {
      offer: {
        dates: [1661018400, 1661018400],
        isDigital: false,
        isDuo: true,
        isEducational: false,
        name: 'Concert de guitare',
        prices: [2000, 3000],
        subcategoryId: 'CONCERT',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AZPQ',
      },
      _geoloc: {
        lat: 48.84217,
        lng: 2.30085,
      },
      objectID: '2399',
    },
    {
      offer: {
        dates: [1661018400],
        isDigital: false,
        isDuo: true,
        isEducational: false,
        name: 'Нет войне / Stop the War in Ukraine!',
        prices: [2000],
        subcategoryId: 'CONCERT',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AZ8Q',
      },
      _geoloc: {
        lat: 48.84217,
        lng: 2.30085,
      },
      objectID: '2398',
    },
    {
      offer: {
        dates: [1661018400],
        isDigital: false,
        isDuo: true,
        isEducational: false,
        name: 'Concert de guitare - Tarif 16 ans - 15 euros',
        prices: [3000],
        subcategoryId: 'CONCERT',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AZPA',
      },
      _geoloc: {
        lat: 48.84217,
        lng: 2.30085,
      },
      objectID: '2394',
    },
    {
      offer: {
        dates: [],
        isDigital: true,
        isDuo: false,
        isEducational: false,
        name: "Dansons jusqu'en 2030",
        prices: [400],
        subcategoryId: 'ABO_PLATEFORME_MUSIQUE',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AYXQ',
      },
      _geoloc: {
        lat: null,
        lng: null,
      },
      objectID: '2314',
    },
    {
      offer: {
        dates: [],
        isDigital: false,
        isDuo: false,
        isEducational: false,
        name: 'QXsFXPkBvMRrZwTCyoYJTtt9',
        prices: [4800],
        subcategoryId: 'SUPPORT_PHYSIQUE_MUSIQUE',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AYWA',
      },
      _geoloc: {
        lat: 48.92643,
        lng: 2.43228,
      },
      objectID: '2310',
    },
    {
      offer: {
        dates: [1658347200, 1659470400],
        isDigital: false,
        isDuo: true,
        isEducational: false,
        name: 'A fond le fond',
        prices: [1900, 2000],
        subcategoryId: 'LIVESTREAM_MUSIQUE',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AYQA',
      },
      _geoloc: {
        lat: 4.92525,
        lng: -52.31159,
      },
      objectID: '2295',
    },
    {
      offer: {
        dates: [1658347200, 1659470400],
        isDigital: false,
        isDuo: true,
        isEducational: false,
        name: "A quand l'augustinade",
        prices: [4100, 4100],
        subcategoryId: 'FESTIVAL_MUSIQUE',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AYEA',
      },
      _geoloc: {
        lat: 48.92643,
        lng: 2.43228,
      },
      objectID: '2265',
    },
    {
      offer: {
        dates: [],
        isDigital: true,
        isDuo: false,
        isEducational: false,
        name: 'Allo Maman ici Groucho',
        prices: [3000],
        subcategoryId: 'LIVRE_NUMERIQUE',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AZDA',
      },
      _geoloc: {
        lat: null,
        lng: null,
      },
      objectID: '2343',
    },
    {
      offer: {
        dates: [],
        isDigital: true,
        isDuo: false,
        isEducational: false,
        name: 'HZUWGMzLRvyuGFBwG3m',
        prices: [2800],
        subcategoryId: 'TELECHARGEMENT_LIVRE_AUDIO',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AY5Q',
      },
      _geoloc: {
        lat: null,
        lng: null,
      },
      objectID: '2329',
    },
    {
      offer: {
        dates: [],
        isDigital: false,
        isDuo: false,
        isEducational: false,
        name: 'Ha!',
        prices: [3000],
        subcategoryId: 'LIVRE_PAPIER',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AYTQ',
      },
      _geoloc: {
        lat: 48.91683,
        lng: 2.43884,
      },
      objectID: '2304',
    },
    {
      offer: {
        dates: [],
        isDigital: true,
        isDuo: false,
        isEducational: false,
        name: 'Ai que bom !',
        prices: [0],
        subcategoryId: 'CINE_VENTE_DISTANCE',
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AZCQ',
      },
      _geoloc: {
        lat: null,
        lng: null,
      },
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
        thumbUrl:
          'https://storage.googleapis.com/passculture-metier-ehp-testing-assets/thumbs/mediations/AYSQ',
      },
      _geoloc: {
        lat: null,
        lng: null,
      },
      objectID: '2301',
    },
  ],
  nbHits: 19,
}

export const useOfferModule = ({
  search,
  moduleId,
}: UseOfferModuleProps): { hits: SearchHit[]; nbHits: number } | undefined => {
  return toto
  const { position } = useGeolocation()
  const transformHits = useTransformOfferHits()
  const parseSearchParameters = useParseSearchParameters()
  const isUserUnderage = useIsUserUnderage()
  const { data: user } = useUserProfileInfo()
  const netInfo = useNetInfo()
  const parsedParameters = search.map(parseSearchParameters).filter(isSearchState)

  const { data, refetch } = useQuery(
    [QueryKeys.HOME_MODULE, moduleId],
    async () =>
      await fetchMultipleOffers({
        paramsList: parsedParameters,
        userLocation: position,
        isUserUnderage,
      }),
    { enabled: !!netInfo.isConnected }
  )

  useEffect(() => {
    // When we enable or disable the geolocation, we want to refetch the home modules
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!position, user?.isBeneficiary])

  return useMemo(() => {
    if (!data) return

    const hits = data.hits.filter(filterOfferHit).map(transformHits)
    const result = {
      hits: uniqBy(hits, 'objectID') as SearchHit[],
      nbHits: data.nbHits,
    }
    console.log(result)
    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, !!position, transformHits])
}
