import React, { FunctionComponent } from 'react'
import { TouchableWithoutFeedback, View, Easing } from 'react-native'
import styled from 'styled-components/native'

import { CreditBlockIcon } from 'features/onboarding/components/CreditBlockIcon'
import { CreditStatusTag } from 'features/onboarding/components/CreditStatusTag'
import { getBackgroundColor } from 'features/onboarding/helpers/getBackgroundColor'
import { getBorderStyle } from 'features/onboarding/helpers/getBorderStyle'
import { getTitleComponent, getAgeComponent } from 'features/onboarding/helpers/getTextComponent'
import { CreditStatus } from 'features/onboarding/types'
import { AnimatedView } from 'libs/react-native-animatable'
import { getSpacing, getSpacingString, Spacer, Typo } from 'ui/theme'

const BEZIER = Easing.bezier(0.41, 0, 0.16, 1.27)

type Props = {
  title: string
  subtitle: string
  description?: string
  underage: boolean
  roundedBorders?: 'top' | 'bottom' // To determine if top or bottom corners should be rounded more
  creditStatus: CreditStatus
  onPress: () => void
}

export const CreditBlock: FunctionComponent<Props> = ({
  title,
  subtitle,
  description,
  underage,
  roundedBorders,
  creditStatus,
  onPress,
}) => {
  const TitleText = getTitleComponent(underage, creditStatus)
  const AgeText = getAgeComponent(underage, creditStatus)
  const animation = {
    0: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
    },
    1: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      marginLeft: -4,
      marginRight: -4,
      marginTop: -4,
    },
  }
  const fakeAnimation = {
    0: {
      zIndex: 0,
    },
    1: {
      zIndex: 0,
    },
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container
        roundedBorders={roundedBorders}
        status={creditStatus}
        animation={creditStatus === CreditStatus.ONGOING ? animation : fakeAnimation}
        duration={240}
        iterationCount={1}
        iterationDelay={300}
        easing={BEZIER}>
        <IconContainer>
          <CreditBlockIcon status={creditStatus} />
        </IconContainer>
        <View>
          <TitleText>{title}</TitleText>
          <Spacer.Column numberOfSpaces={1} />
          <AgeText>{subtitle}</AgeText>
          {!!description && (
            <React.Fragment>
              <Spacer.Column numberOfSpaces={1} />
              <DescriptionText>{description}</DescriptionText>
            </React.Fragment>
          )}
        </View>
        <TagContainer>
          <CreditStatusTag status={creditStatus} roundedBorders={roundedBorders} />
        </TagContainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}

const DescriptionText = styled(Typo.Caption)(({ theme }) => ({
  fontSize: theme.tabBar.fontSize,
  lineHeight: getSpacingString(3),
  color: theme.colors.greyDark,
}))

const Container = styled(AnimatedView)<{
  status: CreditStatus
  roundedBorders?: Props['roundedBorders']
}>(({ theme, status, roundedBorders }) => ({
  ...getBorderStyle(theme, status, roundedBorders),
  backgroundColor: getBackgroundColor(theme, status),
  padding: getSpacing(4),
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
  marginHorizontal: status !== CreditStatus.ONGOING ? getSpacing(1) : 0,
}))

const IconContainer = styled.View({
  marginRight: getSpacing(4),
})

const TagContainer = styled.View({
  position: 'absolute',
  right: 0,
  top: 0,
})
