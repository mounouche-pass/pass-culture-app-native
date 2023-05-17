import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { ViewStyle } from 'react-native'
// eslint-disable-next-line no-restricted-imports
import FastImage, { FastImageProps } from 'react-native-fast-image'
import styled from 'styled-components/native'

type Props = FastImageProps & {
  style?: ViewStyle
}

export const FastBackgroundImage: FunctionComponent<Props> = ({ style, children, ...props }) => (
  <View style={style}>
    <BackgroundImage {...props} resizeMode={FastImage.resizeMode.cover} />
    {children}
  </View>
)

const BackgroundImage = styled(FastImage)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
})
