import { t } from '@lingui/macro'
import React from 'react'
import styled from 'styled-components/native'

import { DMSModal } from 'features/identityCheck/components/DMSModal'
import { analytics } from 'libs/analytics'
import { ButtonPrimary } from 'ui/components/buttons/ButtonPrimary'
import { ButtonTertiaryBlack } from 'ui/components/buttons/ButtonTertiaryBlack'
import { useModal } from 'ui/components/modals/useModal'
import { BicolorPhonePending } from 'ui/svg/icons/BicolorPhonePending'
import { ExternalSiteFilled } from 'ui/svg/icons/ExternalSiteFilled'
import { ColorsEnum, getSpacing, Spacer, Typo } from 'ui/theme'
interface Props {
  showSomeAdviceBeforeIdentityCheckModal: () => void
}

export function IdentityCheckStartContentDesktop({
  showSomeAdviceBeforeIdentityCheckModal,
}: Props) {
  const { visible, showModal, hideModal } = useModal(false)
  const showDMSModal = () => {
    analytics.logStartDMSTransmission()
    showModal()
  }

  return (
    <React.Fragment>
      <BicolorPhonePending size={getSpacing(30)} />
      <Spacer.Column numberOfSpaces={6} />
      <ContentDesktopContainer>
        <Title>{t`Vérifie ton identité sur ton smartphone`}</Title>
        <Spacer.Column numberOfSpaces={6} />
        <Body>
          {t`Gagne du temps en vérifiant ton identité directement sur ton smartphone\u00a0! Sinon tu peux passer par le site Démarches-Simplifiées mais le traitement sera plus long.`}
        </Body>
        <Spacer.Column numberOfSpaces={2} />
        <Body>
          {t`Prends une photo de ta carte d'identité ou de ton passeport en cours de validité pour accéder à ton pass Culture.`}
        </Body>
      </ContentDesktopContainer>
      <Spacer.Column numberOfSpaces={6} />
      <ButtonPrimary
        onPress={showSomeAdviceBeforeIdentityCheckModal}
        title={t`Vérification par smartphone`}
      />
      <Spacer.Column numberOfSpaces={8} />
      <DMSInformationContainer>
        <Typo.Body color={ColorsEnum.GREY_DARK}>{t`Tu n'as pas de smartphone\u00a0?`}</Typo.Body>
        <Spacer.Column numberOfSpaces={4} />
        <ButtonTertiaryBlack
          title={t`Identification par le site Démarches-Simplifiées`}
          onPress={showDMSModal}
          icon={ExternalSiteFilled}
        />
        <Typo.Caption color={ColorsEnum.GREY_DARK}>{t`Environ 10 jours`}</Typo.Caption>
      </DMSInformationContainer>
      <DMSModal visible={visible} hideModal={hideModal} />
      <Spacer.Column numberOfSpaces={6} />
    </React.Fragment>
  )
}

const Title = styled(Typo.Title4)({ textAlign: 'center' })

const Body = styled(Typo.Body)({ textAlign: 'center' })

const ContentDesktopContainer = styled.View({ marginHorizontal: getSpacing(2) })

const DMSInformationContainer = styled.View({ alignItems: 'center', display: 'flex' })