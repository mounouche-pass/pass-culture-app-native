import { t } from '@lingui/macro'
import React from 'react'
import styled from 'styled-components/native'

import { navigateToHome } from 'features/navigation/helpers'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { ButtonTertiaryBlack } from 'ui/components/buttons/ButtonTertiaryBlack'
import { GenericInfoPageWhite } from 'ui/components/GenericInfoPageWhite'
import { BicolorPhonePending } from 'ui/svg/icons/BicolorPhonePending'
import { ClockFilled } from 'ui/svg/icons/ClockFilled'
import { getSpacing, Spacer, Typo } from 'ui/theme'

export const CulturalSurveyIntro = (): JSX.Element => {
  return (
    <GenericInfoPageWhite
      icon={StyledBicolorPhonePending}
      titleComponent={Typo.Title3}
      title={t`Prenons 1 minute`}
      subtitle={t`pour parler de tes pratiques culturelles\u00a0!`}>
      <StyledBody>
        {t`L'objectif du questionnaire est de nous permettre de te suggérer les meilleures activités culturelles selon tes préférences, tes envies et ta localisation.`}
      </StyledBody>
      <Spacer.Flex flex={1} />
      <ButtonPrimary onPress={navigateToHome} wording={t`Débuter le questionnaire`} />
      <ButtonTertiaryBlackContainer>
        <ButtonTertiaryBlack wording={t`Plus tard`} onPress={navigateToHome} icon={ClockFilled} />
      </ButtonTertiaryBlackContainer>
    </GenericInfoPageWhite>
  )
}

const StyledBicolorPhonePending = styled(BicolorPhonePending).attrs(({ theme }) => ({
  size: theme.illustrations.sizes.fullPage,
}))``

const StyledBody = styled(Typo.Body)({
  textAlign: 'center',
  marginBottom: getSpacing(5),
})

const ButtonTertiaryBlackContainer = styled.View({
  marginTop: getSpacing(3),
})
