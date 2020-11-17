import React, {
  FunctionComponent,
  useRef,
  useEffect,
  RefObject,
  useCallback,
  useState,
} from 'react'
import { Dimensions, GestureResponderEvent, ViewProps, ViewStyle } from 'react-native'
import { AnimatableProperties, View as AnimatableView } from 'react-native-animatable'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { Close } from 'ui/svg/icons/Close'
import { IconInterface } from 'ui/svg/icons/types'
import { getSpacing } from 'ui/theme'
import { ColorsEnum } from 'ui/theme'
import { ZIndexes } from 'ui/theme/layers'

type RefType = RefObject<
  React.Component<AnimatableProperties<ViewStyle> & ViewProps, never, never> & {
    fadeOutUp: (duration: number) => Promise<void>
    fadeInDown: (duration: number) => Promise<void>
  }
> | null

export type SnackBarProps = {
  visible: boolean
  message?: string
  icon?: FunctionComponent<IconInterface>
  onClose?: () => void
  timeout?: number
  backgroundColor: ColorsEnum
  color: ColorsEnum
  animationDuration?: number
}

const _SnackBar = (props: SnackBarProps) => {
  const Icon = props.icon
  const animationDuration = props.animationDuration || 500

  const containerRef: RefType = useRef(null)
  const [isVisible, setVisible] = useState(false)

  const triggerVanishAnimation = useCallback(
    async () =>
      containerRef?.current?.fadeOutUp(animationDuration).then(() => void setVisible(false)),
    []
  )
  const triggerApparitionAnimation = useCallback(async () => {
    setVisible(true)
    containerRef?.current?.fadeInDown(animationDuration)
  }, [])

  const onClose = useCallback((e: GestureResponderEvent) => {
    e.stopPropagation()
    props.onClose?.()
  }, [])

  // Visibility effect
  useEffect(() => {
    if (props.visible && !isVisible) {
      triggerApparitionAnimation()
    }
    if (!props.visible && isVisible) {
      triggerVanishAnimation()
    }
  }, [props.visible])

  // Timeout effect
  useEffect(() => {
    if (!props.timeout) {
      return
    }
    const timeout = setTimeout(props.onClose, props.timeout)
    return () => clearTimeout(timeout)
  }, [props.onClose, props.timeout])

  const { top } = useSafeAreaInsets()

  return (
    <AnimatedContainer
      backgroundColor={props.backgroundColor}
      marginTop={top}
      easing="ease"
      duration={animationDuration}
      ref={containerRef}>
      {/* <StatusBar hidden /> */}
      <SnackBarContainer isVisible={isVisible}>
        <React.Fragment>
          <ContentContainer testID="toasterContainer">
            {Icon && <Icon size={22} color={props.color} />}
            <Text color={props.color}>{props.message}</Text>
          </ContentContainer>
          <CloseIconContainer onPress={onClose}>
            <Close size={24} color={props.color} />
          </CloseIconContainer>
        </React.Fragment>
      </SnackBarContainer>
    </AnimatedContainer>
  )
}

export const SnackBar = _SnackBar

const AnimatedContainer = styled(AnimatableView)<{ backgroundColor: string; marginTop: number }>(
  ({ marginTop = 0 }) => ({
    position: 'absolute',
    marginTop,
    top: 0,
    left: 0,
    right: 0,
    zIndex: ZIndexes.SNACK_BAR,
  })
)

const SnackBarContainer = styled.View<{ isVisible: boolean }>(({ isVisible }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  padding: getSpacing(2),
  flexGrow: 0,
  display: isVisible ? 'flex' : 'none',
}))

const ContentContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: getSpacing(1),
})

const Text = styled.Text<{ color: string }>(({ color }) => ({
  color,
  marginLeft: getSpacing(1),
  flexGrow: 0,
  maxWidth: Dimensions.get('window').width - 80,
  flexWrap: 'wrap',
}))

const CloseIconContainer = styled.TouchableOpacity({})
