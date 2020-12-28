import { t } from '@lingui/macro'
import LottieView from 'lottie-react-native'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

import { _ } from 'libs/i18n'
import LoadingAnimation from 'ui/animations/lottie_loading.json'
import { Background } from 'ui/svg/Background'
import { ColorsEnum, getSpacing, Typo } from 'ui/theme'

export const LoadingPage: FunctionComponent = () => {
  return (
    <Container>
      <Background />
      <StyledLottieView testID="Loading-Animation" source={LoadingAnimation} autoPlay loop />
      <LoadingText>{_(t`Chargement en cours...`)}</LoadingText>
    </Container>
  )
}

const Container = styled.View({
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: getSpacing(125),
})

const StyledLottieView = styled(LottieView)({
  width: 150,
  height: 150,
})

const LoadingText = styled(Typo.Body).attrs({
  color: ColorsEnum.WHITE,
})({
  top: -16,
  textAlign: 'center',
  fontSize: 15,
})
