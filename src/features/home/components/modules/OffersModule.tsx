import React, { useCallback, useEffect } from 'react'

import { useAuthContext } from 'features/auth/context/AuthContext'
import { HomeOfferTile } from 'features/home/components/HomeOfferTile'
import { useHomePosition } from 'features/home/helpers/useHomePosition'
import { ModuleData, OffersModule as OffersModuleType } from 'features/home/types'
import { getTabNavConfig } from 'features/navigation/TabBar/helpers'
import { SearchView } from 'features/search/types'
import { useAdaptOffersPlaylistParameters } from 'libs/algolia/fetchAlgolia/fetchMultipleOffers/helpers/useAdaptOffersPlaylistParameters'
import { analytics } from 'libs/analytics'
import { ContentTypes } from 'libs/contentful'
import { getPlaylistItemDimensionsFromLayout } from 'libs/contentful/dimensions'
import useFunctionOnce from 'libs/hooks/useFunctionOnce'
import { formatDates, formatDistance, getDisplayPrice } from 'libs/parsers'
import { useCategoryIdMapping, useCategoryHomeLabelMapping } from 'libs/subcategories'
import { Offer } from 'shared/offer/types'
import { PassPlaylist } from 'ui/components/PassPlaylist'
import { CustomListRenderItem, RenderFooterItem } from 'ui/components/Playlist'
import { SeeMore } from 'ui/components/SeeMore'

type OffersModuleProps = {
  search: OffersModuleType['offersModuleParameters']
  display: OffersModuleType['displayParameters']
  moduleId: string
  cover: string | null
  index: number
  homeEntryId: string | undefined
  data: ModuleData | undefined
}

const keyExtractor = (item: Offer) => item.objectID

export const OffersModule = (props: OffersModuleProps) => {
  const { cover, display, search, index, moduleId, homeEntryId, data } = props
  const { position } = useHomePosition()
  const adaptedPlaylistParameters = useAdaptOffersPlaylistParameters()
  const mapping = useCategoryIdMapping()
  const labelMapping = useCategoryHomeLabelMapping()
  const { user } = useAuthContext()

  const { hits, nbHits } = data ?? { hits: [], nbHits: 0 }

  const [parameters] = search
  // When we navigate to the search page, we want to show 20 results per page,
  // not what is configured in contentful
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchParams = {
    ...adaptedPlaylistParameters(parameters),
    hitsPerPage: 20,
    view: SearchView.Results,
  }
  const searchTabConfig = getTabNavConfig('Search', searchParams)
  const moduleName = display.title ?? parameters.title
  const logHasSeenAllTilesOnce = useFunctionOnce(() =>
    analytics.logAllTilesSeen(moduleName, hits.length)
  )

  const showSeeMore =
    hits.length < nbHits &&
    !(parameters.tags ?? parameters.beginningDatetime ?? parameters.endingDatetime)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onPressSeeMore = showSeeMore
    ? () => {
        analytics.logClickSeeMore({ moduleName, moduleId })
      }
    : undefined

  const renderItem: CustomListRenderItem<Offer> = useCallback(
    ({ item, width, height }) => {
      const timestampsInMillis = item.offer.dates?.map((timestampInSec) => timestampInSec * 1000)
      return (
        <HomeOfferTile
          categoryLabel={labelMapping[item.offer.subcategoryId]}
          categoryId={mapping[item.offer.subcategoryId]}
          subcategoryId={item.offer.subcategoryId}
          offerId={+item.objectID}
          distance={formatDistance(item._geoloc, position)}
          name={item.offer.name}
          date={formatDates(timestampsInMillis)}
          isDuo={item.offer.isDuo}
          thumbUrl={item.offer.thumbUrl}
          price={getDisplayPrice(item.offer.prices)}
          isBeneficiary={user?.isBeneficiary}
          moduleName={moduleName}
          moduleId={moduleId}
          homeEntryId={homeEntryId}
          width={width}
          height={height}
        />
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [position, user?.isBeneficiary, labelMapping, mapping]
  )

  const { itemWidth, itemHeight } = getPlaylistItemDimensionsFromLayout(display.layout)

  const renderFooter: RenderFooterItem = useCallback(
    ({ width, height }) => {
      return showSeeMore ? (
        <SeeMore
          navigateTo={{ screen: searchTabConfig[0], params: searchTabConfig[1], withPush: true }}
          width={width}
          height={height}
          onPress={onPressSeeMore as () => void}
        />
      ) : (
        <React.Fragment />
      )
    },
    [onPressSeeMore, showSeeMore, searchTabConfig]
  )

  const shouldModuleBeDisplayed = hits.length > 0 && nbHits >= display.minOffers

  useEffect(() => {
    if (shouldModuleBeDisplayed) {
      analytics.logModuleDisplayedOnHomepage(moduleId, ContentTypes.ALGOLIA, index, homeEntryId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldModuleBeDisplayed])

  if (!shouldModuleBeDisplayed) return <React.Fragment />

  return (
    <PassPlaylist
      testID="offersModuleList"
      title={display.title}
      subtitle={display.subtitle}
      data={hits}
      itemHeight={itemHeight}
      itemWidth={itemWidth}
      coverUrl={cover}
      onPressSeeMore={onPressSeeMore}
      titleSeeMoreLink={{ screen: searchTabConfig[0], params: searchTabConfig[1] }}
      renderItem={renderItem}
      renderFooter={renderFooter}
      keyExtractor={keyExtractor}
      onEndReached={logHasSeenAllTilesOnce}
    />
  )
}
