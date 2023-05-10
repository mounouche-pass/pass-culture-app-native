import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { useIsUserUnderage } from 'features/profile/helpers/useIsUserUnderage'
import { IncompleteSearchHit } from 'libs/algolia'
import { fetchOfferHits } from 'libs/algolia/fetchAlgolia/fetchOfferHits'
import { useTransformOfferHits, filterOfferHit } from 'libs/algolia/fetchAlgolia/transformOfferHit'
import { QueryKeys } from 'libs/queryKeys'
import { Offer } from 'shared/offer/types'

export const useAlgoliaRecommendedHits = (ids: string[], moduleId: string): Offer[] | undefined => {
  const isUserUnderage = useIsUserUnderage()
  const transformHits = useTransformOfferHits()

  const moduleQueryKey = moduleId
  const { data: hits } = useQuery(
    [QueryKeys.RECOMMENDATION_HITS, moduleQueryKey],
    () => fetchOfferHits({ objectIds: ids, isUserUnderage }),
    { enabled: ids.length > 0 }
  )
  // const hits = ['102280', '102272']

  console.log({ hits })
  return useMemo(() => {
    if (!hits || hits.length === 0) return

    return (hits as IncompleteSearchHit[]).filter(filterOfferHit).map(transformHits) as Offer[]
  }, [hits, transformHits])
}
