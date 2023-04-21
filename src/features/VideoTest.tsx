import React, { FunctionComponent, useCallback, useState } from 'react'
import { Alert, View } from 'react-native'
import YoutubePlayer, { getYoutubeMeta } from 'react-native-youtube-iframe'
import { useQuery } from 'react-query'
import styled from 'styled-components/native'

import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { Spacer, Typo } from 'ui/theme'

const VideoTest_YoutubePlayer: FunctionComponent = () => {
  const [playing1, setPlaying1] = useState(true)
  const [hasFinishPlaying, setHasFinishPlaying] = useState(false)

  const { title } = useGetVideoMetadata('qE7xwEZnFP0')

  const onStateChange1 = useCallback((state) => {
    if (state === 'ended') {
      setPlaying1(false)
      setHasFinishPlaying(true)
    }
  }, [])

  const VIDEO_HEIGHT = 210

  return (
    <View>
      <Spacer.Column numberOfSpaces={12} />
      <Typo.Title3>{title}</Typo.Title3>
      <Spacer.Column numberOfSpaces={4} />
      <View>
        <StyledVideoPlayer>
          <YoutubePlayer
            initialPlayerParams={{ modestbranding: true, rel: false }}
            height={VIDEO_HEIGHT}
            play={playing1}
            videoId={'qE7xwEZnFP0'} //on peut renseigner un id de vidéo
            // playList={['qE7xwEZnFP0', 'S3E4Vot-HH0']} //on peut renseigner une liste d'id de vidéo qui vont se lancer à la suite
            onChangeState={onStateChange1}
          />
        </StyledVideoPlayer>
        {!!hasFinishPlaying && (
          <EndView
            onPressReplay={() => {
              setPlaying1(true), setHasFinishPlaying(false)
            }}
            onPressShare={() => Alert.alert("Partage l'offre vidéo")}
          />
        )}
      </View>
      <Spacer.Column numberOfSpaces={4} />
      <OffrePlaylist title={"D'autres offres similiaires"} />
    </View>
  )
}

// Composant qui se place au dessus du player à la fin de la vidéo
// Le but est :
// - d'empêcher l'utilisateur de cliquer sur les vidéos recommendées par Youtube (car pas forcément celle du pass)
// - de placer des boutons custom de replay, de partage, d'accès à l'offre,...
const EndView: FunctionComponent<{ onPressReplay: () => void; onPressShare: () => void }> = ({
  onPressReplay,
  onPressShare,
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: 210,
        backgroundColor: 'black',
      }}>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <ButtonPrimary wording="Replay" onPress={onPressReplay} />
        <Spacer.Column numberOfSpaces={2} />
        <ButtonPrimary wording="Partager" onPress={onPressShare} />
      </View>
    </View>
  )
}

export { VideoTest_YoutubePlayer as VideoTest }

export const useGetVideoMetadata = (id: string) => {
  const { data } = useQuery('MetadataTest', () => getYoutubeMeta(id))

  return {
    title: data?.title,
    thumbnail: {
      url: data?.thumbnail_url,
      width: data?.thumbnail_width,
      height: data?.thumbnail_height,
    },
  }
}

const StyledVideoPlayer = styled.View({})

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

const StyledOfferPlaylist = styled.View({
  flexDirection: 'row',
})
