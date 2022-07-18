import { t } from '@lingui/macro'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { NativeSyntheticEvent, Platform, TextInputSubmitEditingEventData, View } from 'react-native'
import styled from 'styled-components/native'
import { v4 as uuidv4 } from 'uuid'

import { UseNavigationType, UseRouteType } from 'features/navigation/RootNavigator'
import { LocationType } from 'features/search/enums'
import { useStagedSearch } from 'features/search/pages/SearchWrapper'
import { usePushWithStagedSearch } from 'features/search/pages/usePushWithStagedSearch'
import { useShowResults } from 'features/search/pages/useShowResults'
import { analytics } from 'libs/firebase/analytics'
import { HiddenAccessibleText } from 'ui/components/HiddenAccessibleText'
import { TouchableOpacity } from 'ui/components/TouchableOpacity'
import { ArrowPrevious as DefaultArrowPrevious } from 'ui/svg/icons/ArrowPrevious'
import { getSpacing } from 'ui/theme'
import { getHeadingAttrs } from 'ui/theme/typographyAttrs/getHeadingAttrs'

import { useLocationChoice } from './locationChoice.utils'
import { SearchMainInput } from './SearchMainInput'

type Props = {
  searchInputID: string
  showLocationButton?: boolean
  isFocus: boolean
  shouldAutocomplete: boolean
  accessibleHiddenTitle?: string
  setShouldAutocomplete: (shouldAutocomplete: boolean) => void
  setAutocompleteValue: (query: string) => void
}

export const SearchBox: React.FC<Props> = ({
  searchInputID,
  showLocationButton,
  isFocus,
  accessibleHiddenTitle,
  ...props
}) => {
  const { params } = useRoute<UseRouteType<'Search'>>()
  const { navigate } = useNavigation<UseNavigationType>()
  const { searchState: stagedSearchState, dispatch: stagedDispatch } = useStagedSearch()
  const [query, setQuery] = useState<string>(params?.query || '')
  const accessibilityDescribedBy = uuidv4()
  const showResults = useShowResults()
  const { locationFilter } = stagedSearchState
  const { locationType } = locationFilter
  // PLACE and VENUE belong to the same section
  const section = locationType === LocationType.VENUE ? LocationType.PLACE : locationType
  const { label: locationLabel } = useLocationChoice(section)
  const pushWithStagedSearch = usePushWithStagedSearch()

  useEffect(() => {
    setQuery(params?.query || '')
  }, [params?.query])

  const resetQuery = useCallback(() => {
    setAutocompleteValue('')
    pushWithStagedSearch({ query: '' })
    setQuery('')
    setShouldAutocomplete(false)
  }, [setAutocompleteValue, setShouldAutocomplete, pushWithStagedSearch])

  const onPressArrowBack = useCallback(() => {
    stagedDispatch({
      type: 'SET_STATE',
      payload: { locationFilter },
    })
    pushWithStagedSearch(
      {
        query: '',
        showResults: false,
        locationFilter,
      },
      {
        reset: true,
      }
    )
    setShouldAutocomplete(false)
    setQuery('')
    setAutocompleteValue('')
  }, [
    locationFilter,
    setAutocompleteValue,
    setShouldAutocomplete,
    pushWithStagedSearch,
    stagedDispatch,
  ])

  const onPressLocationButton = useCallback(() => {
    navigate('LocationFilter')
  }, [navigate])

  const onSubmitQuery = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const queryText = event.nativeEvent.text
    if (queryText.length < 1 && Platform.OS !== 'android') return
    setShouldAutocomplete(false)
    // When we hit enter, we may have selected a category or a venue on the search landing page
    // these are the two potentially 'staged' filters that we want to commit to the global search state.
    // We also want to commit the price filter, as beneficiary users may have access to different offer
    // price range depending on their available credit.
    const { offerCategories, priceRange } = stagedSearchState
    pushWithStagedSearch({
      showResults: true,
      query: queryText,
      locationFilter,
      offerCategories,
      priceRange,
    })
    analytics.logSearchQuery(queryText)
  }

  return (
    <RowContainer testID="searchBoxWithoutAutocomplete">
      {!!accessibleHiddenTitle && (
        <HiddenAccessibleText {...getHeadingAttrs(1)}>{accessibleHiddenTitle}</HiddenAccessibleText>
      )}
      <SearchInputContainer {...props}>
        {showResults || shouldAutocomplete ? (
          <StyledTouchableOpacity testID="previousButton" onPress={onPressArrowBack}>
            <ArrowPrevious />
          </StyledTouchableOpacity>
        ) : null}
        <SearchMainInput
          searchInputID={searchInputID}
          query={query}
          setQuery={setQuery}
          isFocus={isFocus}
          onSubmitQuery={onSubmitQuery}
          resetQuery={resetQuery}
          onFocusState={onFocusState}
          showLocationButton={showLocationButton}
          onChangeText={setQuery}
          locationLabel={locationLabel}
          onPressLocationButton={onPressLocationButton}
        />
      </SearchInputContainer>
      <HiddenAccessibleText nativeID={accessibilityDescribedBy}>
        {t`Indique le nom d'une offre ou d'un lieu puis lance la recherche à l'aide de la touche
          "Entrée"`}
      </HiddenAccessibleText>
    </RowContainer>
  )
}

const RowContainer = styled.View({
  flexDirection: 'row',
})

const ArrowPrevious = styled(DefaultArrowPrevious).attrs(({ theme }) => ({
  size: theme.icons.sizes.small,
}))``

const SearchInputContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const StyledTouchableOpacity = styled(TouchableOpacity)({
  marginRight: getSpacing(4),
})
