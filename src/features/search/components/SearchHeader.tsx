import { t } from '@lingui/macro'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { SearchBox } from 'features/search/components/SearchBox'
import { SearchBoxAutocomplete } from 'features/search/components/SearchBoxAutocomplete'
import { useShowResults } from 'features/search/pages/useShowResults'
import { InputLabel } from 'ui/components/InputLabel/InputLabel'
import { styledInputLabel } from 'ui/components/InputLabel/styledInputLabel'
import { HeaderBackground } from 'ui/svg/HeaderBackground'
import { getSpacing, Spacer } from 'ui/theme'
import { getHeadingAttrs } from 'ui/theme/typographyAttrs/getHeadingAttrs'
import { useCustomSafeInsets } from 'ui/theme/useCustomSafeInsets'

type Props = {
  searchInputID: string
  appEnableAutocomplete: boolean
}

const SearchBoxWithLabel = ({
  searchInputID,
  appEnableAutocomplete,
}: Omit<Props, 'paramsShowResults' | 'autocompleteValue'>) => {
  const { top } = useCustomSafeInsets()

  return (
    <React.Fragment>
      <HeaderBackground height={top + getSpacing(20)} />
      <Spacer.TopScreen />
      <SearchBoxContainer testID="searchBoxWithLabel">
        <View {...getHeadingAttrs(1)}>
          <StyledInputLabel htmlFor={searchInputID}>{t`Recherche une offre`}</StyledInputLabel>
        </View>
        <Spacer.Column numberOfSpaces={2} />
        {appEnableAutocomplete ? (
          <FloatingSearchBoxContainer>
            <FloatingSearchBoxAutocomplete
              searchInputID={searchInputID}
              showLocationButton={true}
            />
          </FloatingSearchBoxContainer>
        ) : (
          <FloatingSearchBoxContainer>
            <FloatingSearchBox searchInputID={searchInputID} showLocationButton={true} />
          </FloatingSearchBoxContainer>
        )}
      </SearchBoxContainer>
    </React.Fragment>
  )
}

const SearchBoxWithoutLabel = ({
  appEnableAutocomplete,
  searchInputID,
}: Omit<Props, 'paramsShowResults' | 'autocompleteValue'>) => {
  const { top } = useCustomSafeInsets()
  const showResults = useShowResults()

  return (
    <React.Fragment>
      <HeaderBackgroundWrapperWithoutLabel maxHeight={top}>
        <HeaderBackground />
      </HeaderBackgroundWrapperWithoutLabel>
      <SearchBoxContainer testID="searchBoxWithoutLabel">
        {appEnableAutocomplete ? (
          <SearchBoxAutocomplete
            searchInputID={searchInputID}
            accessibleHiddenTitle={t`Recherche une offre, un titre, un lieu...`}
          />
        ) : (
          <SearchBox
            searchInputID={searchInputID}
            accessibleHiddenTitle={t`Recherche une offre, un titre, un lieu...`}
          />
        )}
      </SearchBoxContainer>
      <Spacer.Column numberOfSpaces={1} />
    </React.Fragment>
  )
}

export const SearchHeader: React.FC<Props> = ({ searchInputID, appEnableAutocomplete }) => {
  const showResults = useShowResults()

  return !params || params?.view === SearchView.Landing ? (
    <SearchBoxWithLabel
      searchInputID={searchInputID}
      appEnableAutocomplete={appEnableAutocomplete}
    />
  ) : (
    <SearchBoxWithoutLabel
      searchInputID={searchInputID}
      appEnableAutocomplete={appEnableAutocomplete}
    />
  )
}

const SearchBoxContainer = styled.View({
  marginTop: getSpacing(6),
  paddingHorizontal: getSpacing(6),
  zIndex: 1,
})
const HeaderBackgroundWrapperWithoutLabel = styled.View<{ maxHeight: number }>(({ maxHeight }) => ({
  overflow: 'hidden',
  position: 'relative',
  maxHeight,
}))
const StyledInputLabel = styledInputLabel(InputLabel)(({ theme }) => ({
  ...theme.typography.title4,
  color: theme.colors.white,
}))

const FloatingSearchBoxContainer = styled.View({
  position: 'relative',
  zIndex: 1,
})

const FloatingSearchBox = styled(SearchBox)({
  position: 'absolute',
  left: 0,
  right: 0,
})

const FloatingSearchBoxAutocomplete = styled(SearchBoxAutocomplete)({
  position: 'absolute',
  left: 0,
  right: 0,
})
