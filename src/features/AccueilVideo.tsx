import { useNavigation } from '@react-navigation/core'
import React, { FunctionComponent } from 'react'
import { ScrollView, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useTheme } from 'styled-components'
import styled from 'styled-components/native'

import { UseNavigationType } from 'features/navigation/RootNavigator/types'
import { VideoTest, useGetVideoMetadata } from 'features/VideoTest'
import { ButtonPrimaryWhite } from 'ui/components/buttons/ButtonPrimaryWhite'
import { AppModal } from 'ui/components/modals/AppModal'
import { useModal } from 'ui/components/modals/useModal'
import { Spacer, Typo } from 'ui/theme'

export const AcceuilVideo: FunctionComponent = () => {
  const { navigate } = useNavigation<UseNavigationType>()
  const {
    thumbnail: { height, url, width },
  } = useGetVideoMetadata('qE7xwEZnFP0')

  const { hideModal, showModal, visible } = useModal()
  return (
    <HomeContainer>
      <Spacer.Column numberOfSpaces={10} />
      <Typo.Title1>Salut Agathe&nbsp;!</Typo.Title1>
      <Spacer.Column numberOfSpaces={6} />
      <OffrePlaylist title="Playlist 1" />
      <OffreVideo
        title="Waouh, Une offre avec une vidéo qui va s’ouvrir dans une modale&nbsp;!"
        url={url}
        height={height}
        width={width}
        onPress={showModal}
      />
      <OffreVideo
        title="Waouh, Une offre avec une vidéo qui va s’ouvrir dans une page&nbsp;!"
        url={url}
        height={height}
        width={width}
        onPress={() => navigate('VideoTest')}
      />
      <OffrePlaylist title="Playlist 2" />
      <AppModal title="Modal Video" visible={visible} onBackdropPress={hideModal}>
        <VideoTest />
      </AppModal>
    </HomeContainer>
  )
}

const OffrePlaylist: FunctionComponent<{ title: string }> = ({ title }) => (
  <View>
    <Typo.Title3>{title}</Typo.Title3>
    <StyledOfferPlaylist>
      <StyledOffer />
      <StyledOffer />
      <StyledOffer />
    </StyledOfferPlaylist>
  </View>
)

const StyledOffer = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.greyLight,
  height: 150,
  width: 100,
  margin: 10,
}))

const OffreVideo: FunctionComponent<{
  title: string
  url: string | undefined
  width: number | undefined
  height: number | undefined
  onPress: () => void
}> = ({ title, url, width = 200, height = 150, onPress }) => {
  const theme = useTheme()
  return (
    <View>
      <Typo.Title3>{title}</Typo.Title3>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: theme.colors.greyLight,
        }}>
        <View
          style={{
            width: width * 0.6,
            height: height * 0.6,
          }}>
          <FastImage source={{ uri: url }} style={{ flex: 1 }} />
        </View>
      </View>
      <Spacer.Column numberOfSpaces={2} />
      <ButtonPrimaryWhite wording={'Lujipeka ❤️'} onPress={onPress} />
    </View>
  )
}

const StyledOfferPlaylist = styled.View({
  flexDirection: 'row',
})

const HomeContainer = styled(ScrollView)({
  width: '100%',
  height: '100%',
})
