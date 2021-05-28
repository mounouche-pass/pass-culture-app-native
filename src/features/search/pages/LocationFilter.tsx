import { t } from '@lingui/macro'
import { useNavigation } from '@react-navigation/native'
import debounce from 'lodash.debounce'
import React, { useRef } from 'react'
import { ScrollView, ViewStyle, Linking } from 'react-native'
import styled from 'styled-components/native'

import { UseNavigationType } from 'features/navigation/RootNavigator'
import { LocationChoice } from 'features/search/components/LocationChoice'
import { useStagedSearch } from 'features/search/pages/SearchWrapper'
import { LocationType } from 'libs/algolia'
import { MonitoringError } from 'libs/errorMonitoring'
import { useGeolocation, GeolocPermissionState } from 'libs/geolocation'
import { GeolocationActivationModal } from 'libs/geolocation/components/GeolocationActivationModal'
import { Banner } from 'ui/components/Banner'
import { PageHeader } from 'ui/components/headers/PageHeader'
import { InputError } from 'ui/components/inputs/InputError'
import { useModal } from 'ui/components/modals/useModal'
import { getSpacing, Spacer } from 'ui/theme'

const DEBOUNCED_CALLBACK = 500

export const LocationFilter: React.FC = () => {
  const { navigate, goBack } = useNavigation<UseNavigationType>()
  const {
    position,
    isPositionUnavailable,
    permissionState,
    requestGeolocPermission,
  } = useGeolocation()
  const { dispatch } = useStagedSearch()
  const debouncedGoBack = useRef(debounce(goBack, DEBOUNCED_CALLBACK)).current
  const {
    visible: isGeolocPermissionModalVisible,
    showModal: showGeolocPermissionModal,
    hideModal: hideGeolocPermissionModal,
  } = useModal(false)

  const onPressPickPlace = () => {
    if (debouncedGoBack) debouncedGoBack.cancel()
    navigate('LocationPicker')
  }

  const onPressAroundMe = async () => {
    if (position === null) {
      if (permissionState === GeolocPermissionState.GRANTED) {
        new MonitoringError('Position is unavailable', 'NoPositionOfferSearchResults')
        return
      }
      if (permissionState === GeolocPermissionState.NEVER_ASK_AGAIN) {
        showGeolocPermissionModal()
      } else {
        await requestGeolocPermission()
        debouncedGoBack()
      }
    } else {
      dispatch({
        type: 'LOCATION_AROUND_ME',
        payload: { latitude: position.latitude, longitude: position.longitude },
      })
      debouncedGoBack()
    }
  }

  const onPressEverywhere = () => {
    dispatch({ type: 'LOCATION_EVERYWHERE' })
    debouncedGoBack()
  }

  const onPressGeolocPermissionModalButton = () => {
    Linking.openSettings()
    hideGeolocPermissionModal()
    debouncedGoBack()
  }

  return (
    <React.Fragment>
      <Spacer.TopScreen />
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <Spacer.Column numberOfSpaces={14} />
        <Spacer.Column numberOfSpaces={6} />
        <BannerContainer>
          <Banner
            title={t`Seules les sorties et offres physiques seront affichées pour une recherche avec une localisation`}
          />
        </BannerContainer>
        <Spacer.Column numberOfSpaces={6} />
        <LocationChoice
          testID="pickPlace"
          locationType={LocationType.PLACE}
          arrowNext={true}
          onPress={onPressPickPlace}
        />
        <Spacer.Column numberOfSpaces={4} />
        <LocationChoice
          testID="aroundMe"
          locationType={LocationType.AROUND_ME}
          onPress={onPressAroundMe}
        />
        {!!isPositionUnavailable && (
          <InputError
            visible
            messageId={t`La géolocalisation est temporairement inutilisable sur ton téléphone`}
            numberOfSpacesTop={1}
          />
        )}
        <Spacer.Column numberOfSpaces={4} />
        <LocationChoice
          testID="everywhere"
          locationType={LocationType.EVERYWHERE}
          onPress={onPressEverywhere}
        />
      </ScrollView>

      <PageHeader title={t`Localisation`} />
      <GeolocationActivationModal
        isGeolocPermissionModalVisible={isGeolocPermissionModalVisible}
        hideGeolocPermissionModal={hideGeolocPermissionModal}
        onPressGeolocPermissionModalButton={onPressGeolocPermissionModalButton}
      />
    </React.Fragment>
  )
}

const contentContainerStyle: ViewStyle = { flexGrow: 1 }

const BannerContainer = styled.View({ marginHorizontal: getSpacing(6) })
