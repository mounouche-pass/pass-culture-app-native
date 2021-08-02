import React, { useMemo } from 'react'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'

import { CategoryNameEnum } from 'api/gen'
import { useHeroDimensions } from 'ui/components/hero/useHeroDimensions'
import { ImagePlaceholder } from 'ui/components/ImagePlaceholder'
import { ColorsEnum, getSpacing, Spacer, getShadow } from 'ui/theme'

import { HeroHeader } from './HeroHeader'

interface Props {
  imageUrl: string
  categoryName?: CategoryNameEnum | null
  landscape?: boolean | false
}

export const Hero: React.FC<Props> = ({ imageUrl, categoryName, landscape }) => {
  const source = useMemo(() => ({ uri: imageUrl }), [imageUrl])
  const { numberOfSpacesColumn, backgroundHeight, imageStyle } = useHeroDimensions(!!landscape)
  return (
    <HeroHeader
      imageHeight={backgroundHeight}
      categoryName={categoryName}
      imageUrl={imageUrl || ''}>
      <Spacer.Column numberOfSpaces={numberOfSpacesColumn} />
      <ImageContainer style={imageStyle} testID="image-container">
        {imageUrl ? (
          <FastImage style={imageStyle} source={source} resizeMode={FastImage.resizeMode.cover} />
        ) : (
          <ImagePlaceholder categoryName={categoryName || null} size={getSpacing(24)} />
        )}
      </ImageContainer>
    </HeroHeader>
  )
}

const ImageContainer = styled.View({
  bottom: 0,
  ...getShadow({
    shadowOffset: {
      width: 0,
      height: getSpacing(2),
    },
    shadowRadius: getSpacing(3),
    shadowColor: ColorsEnum.BLACK,
    shadowOpacity: 0.2,
  }),
})
