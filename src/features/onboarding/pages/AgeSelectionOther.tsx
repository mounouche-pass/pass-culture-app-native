import React, { FunctionComponent, useCallback } from 'react'
import styled from 'styled-components/native'

import { navigateToHomeConfig } from 'features/navigation/helpers'
import { AgeButton } from 'features/onboarding/components/AgeButton'
import { OnboardingPage } from 'features/onboarding/pages/OnboardingPage'
import { env } from 'libs/environment/env'
import { analytics } from 'libs/firebase/analytics'
import { ButtonTertiaryBlack } from 'ui/components/buttons/ButtonTertiaryBlack'
import { TouchableLink } from 'ui/components/touchableLink/TouchableLink'
import { InfoPlain } from 'ui/svg/icons/InfoPlain'
import { Spacer, Typo } from 'ui/theme'
import { getNoHeadingAttrs } from 'ui/theme/typographyAttrs/getNoHeadingAttrs'

export const AgeSelectionOther: FunctionComponent = () => {
  const logGoToParentsFAQ = useCallback(() => analytics.logGoToParentsFAQ('ageselectionother'), [])
  const logSelectAgeUnder15 = useCallback(() => analytics.logSelectAge('under_15'), [])
  const logSelectAgeOver18 = useCallback(() => analytics.logSelectAge('over_18'), [])

  return (
    <OnboardingPage>
      <AgeButton onBeforeNavigate={logSelectAgeUnder15} navigateTo={navigateToHomeConfig}>
        <Title4Text>
          j’ai <Title3Text>moins de 15 ans</Title3Text>
        </Title4Text>
      </AgeButton>
      <Spacer.Column numberOfSpaces={4} />
      <AgeButton onBeforeNavigate={logSelectAgeOver18} navigateTo={navigateToHomeConfig}>
        <Title4Text>
          j’ai <Title3Text>plus de 18 ans</Title3Text>
        </Title4Text>
      </AgeButton>
      <Spacer.Column numberOfSpaces={4} />
      <TouchableLink
        key={1}
        as={ButtonTertiaryBlack}
        wording="Je suis un parent"
        icon={InfoPlain}
        onBeforeNavigate={logGoToParentsFAQ}
        externalNav={{ url: env.FAQ_LINK_LEGAL_GUARDIAN }}
      />
    </OnboardingPage>
  )
}

const Title3Text = styled(Typo.Title3).attrs(getNoHeadingAttrs)(({ theme }) => ({
  color: theme.colors.secondary,
}))

const Title4Text = styled(Typo.Title4).attrs(getNoHeadingAttrs)(({ theme }) => ({
  color: theme.colors.secondary,
}))