import React, { memo } from 'react'

import {
  BusinessModule,
  ExclusivityModule,
  OffersModule,
  VenuesModule,
} from 'features/home/components'
import { CategoryListModule } from 'features/home/components/modules/categories/CategoryListModule'
import { RecommendationModule } from 'features/home/components/modules/RecommendationModule'
import { ThematicHighlightModule } from 'features/home/components/modules/ThematicHighlightModule'
import {
  HomepageModule,
  HomepageModuleType,
  isBusinessModule,
  isCategoryListModule,
  isExclusivityModule,
  isOffersModule,
  isRecommendedOffersModule,
  isThematicHighlightModule,
  isVenuesModule,
  OffersData,
  VenuesData,
} from 'features/home/types'

const UnmemoizedModule = ({
  item,
  index,
  homeEntryId,
  data,
}: {
  item: HomepageModule
  index: number
  homeEntryId: string
  data?: OffersData | VenuesData
}) => {
  if (isOffersModule(item)) {
    return (
      <OffersModule
        moduleId={item.id}
        search={item.offersModuleParameters}
        display={item.displayParameters}
        cover={item.cover ?? null}
        index={index}
        homeEntryId={homeEntryId}
        data={data as OffersData | undefined}
      />
    )
  }

  if (isVenuesModule(item)) {
    return (
      <VenuesModule
        moduleId={item.id}
        display={item.displayParameters}
        homeEntryId={homeEntryId}
        index={index}
        data={data as VenuesData | undefined}
      />
    )
  }
  if (isRecommendedOffersModule(item)) {
    return (
      <RecommendationModule
        moduleId={item.id}
        index={index}
        displayParameters={item.displayParameters}
        recommendationParameters={item.recommendationParameters}
        homeEntryId={homeEntryId}
      />
    )
  }
  if (isExclusivityModule(item)) {
    return (
      <ExclusivityModule
        moduleId={item.id}
        title={item.title}
        alt={item.alt}
        image={item.image}
        offerId={item.offerId}
        displayParameters={item.displayParameters}
        homeEntryId={homeEntryId}
        index={index}
        url={item.url}
      />
    )
  }

  if (isThematicHighlightModule(item)) {
    return <ThematicHighlightModule {...item} homeEntryId={homeEntryId} index={index} />
  }

  const toto = {
    [HomepageModuleType.BusinessModule]: BusinessModule,
    [HomepageModuleType.CategoryListModule]: CategoryListModule,
  }

  const Component = toto[item.type]
  return <Component {...item} homeEntryId={homeEntryId} index={index} moduleId={item.id} />
}

export const HomeModule = memo(UnmemoizedModule)
