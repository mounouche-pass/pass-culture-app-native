import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components/native'

import {
  CategoryBlock,
  CategoryBlockProps,
} from 'features/home/components/modules/categories/CategoryBlock'
import { getColorFilter } from 'features/home/components/modules/categories/helpers/getColorFilter'
import { getSpacing, Spacer, Typo } from 'ui/theme'

type CategoryBlockData = Omit<CategoryBlockProps, 'filter'>

type CategoryListProps = {
  title: string
  categoryBlockList: CategoryBlockData[]
}

const keyExtractor = (_item: CategoryBlockData, index: number) => `category_block_#${index}`

const renderItem = ({ item, index }: { item: CategoryBlockData; index: number }) => (
  <CategoryBlockContainer index={index}>
    <CategoryBlock {...item} filter={getColorFilter(index)} />
  </CategoryBlockContainer>
)

const ListFooterComponent = () => <FooterSeparator />

const ItemSeparatorComponent = () => <VerticalSeparator />

const ListHeaderComponent = (title: string) => (
  <React.Fragment>
    <Typo.Title3 numberOfLines={2}>{title}</Typo.Title3>
    <Spacer.Column numberOfSpaces={4} />
  </React.Fragment>
)

export const CategoryListModule = (props: CategoryListProps) => {
  const { title, categoryBlockList } = props
  const theme = useTheme()
  const numColumns = theme.isDesktopViewport ? 4 : 2

  return (
    <FlatListContainer>
      <FlatList
        ListHeaderComponent={ListHeaderComponent(title)}
        ListFooterComponent={ListFooterComponent}
        data={categoryBlockList}
        numColumns={numColumns}
        horizontal={false}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        scrollEnabled={false}
        key={numColumns}
        keyExtractor={keyExtractor}
      />
    </FlatListContainer>
  )
}

const FlatListContainer = styled.View({
  marginHorizontal: getSpacing(6),
})

const CategoryBlockContainer = styled.View<{ index: number }>(({ index, theme }) => ({
  flex: theme.isDesktopViewport ? 0.25 : 0.5,
  marginRight: getCategoryBlockMargin(index, theme.isDesktopViewport),
}))

const getCategoryBlockMargin = (index: number, isDesktopViewport?: boolean) => {
  if (isDesktopViewport) {
    const desktopIndexes = [0, 1, 2, 4, 5]
    return desktopIndexes.includes(index) ? getSpacing(4) : 0
    // return index % 4 !== 3 ? getSpacing(4) : 0
  }
  const mobileIndexes = [0, 2, 4]
  return mobileIndexes.includes(index) ? getSpacing(2) : 0
  // return index % 2 === 0 ? getSpacing(2) : 0
}

const VerticalSeparator = styled.View(({ theme }) => ({
  height: theme.isDesktopViewport ? getSpacing(4) : getSpacing(2),
}))

const FooterSeparator = styled.View(({ theme }) => ({
  height: theme.home.spaceBetweenModules,
}))
