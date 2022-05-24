/* eslint-disable react-native/no-raw-text */
import React from 'react'
import { Text } from 'react-native'

export type Props = {
  accessibilityLabel?: string
  withSpaceBefore?: boolean
  withSpaceAfter?: boolean
  children?: string
}

const nonBreakingSpace = '\u00a0'

const Container: React.FC<Props> = ({
  accessibilityLabel,
  withSpaceBefore,
  withSpaceAfter,
  children,
}) => {
  return (
    <Text
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
      aria-hidden={!accessibilityLabel}>
      {withSpaceBefore && nonBreakingSpace}
      {children}
      {withSpaceAfter && nonBreakingSpace}
    </Text>
  )
}

const CryingFace = (props: Props) => <Container {...props}>😢</Container>

export const Emoji = {
  CryingFace,
}