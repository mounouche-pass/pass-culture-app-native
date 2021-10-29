import { t } from '@lingui/macro'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'

import { api } from 'api/api'
import { ValidateEmailResponse } from 'api/gen'
import { UseNavigationType, UseRouteType } from 'features/navigation/RootNavigator'
import { homeNavConfig } from 'features/navigation/TabBar/helpers'
import { isUserUnderage } from 'features/profile/utils'
import { isTimestampExpired } from 'libs/dates'
import { LoadingPage } from 'ui/components/LoadingPage'
import { useSnackBarContext } from 'ui/components/snackBar/SnackBarContext'

import { useLoginRoutine } from '../../AuthContext'
import { useValidateEmailMutation } from '../../mutations'

export function AfterSignupEmailValidationBuffer() {
  const { showInfoSnackBar } = useSnackBarContext()

  const { navigate } = useNavigation<UseNavigationType>()
  const delayedNavigate: typeof navigate = (...args: Parameters<typeof navigate>) => {
    setTimeout(() => {
      navigate(...args)
    }, 2000)
  }
  const { params } = useRoute<UseRouteType<'AfterSignupEmailValidationBuffer'>>()

  useEffect(beforeEmailValidation, [])

  const loginRoutine = useLoginRoutine()

  const { mutate: validateEmail } = useValidateEmailMutation(
    onEmailValidationSuccess,
    onEmailValidationFailure
  )

  function beforeEmailValidation() {
    if (isTimestampExpired(params.expiration_timestamp)) {
      delayedNavigate('SignupConfirmationExpiredLink', { email: params.email })
      return
    }
    validateEmail({
      emailValidationToken: params.token,
    })
  }

  async function onEmailValidationSuccess(response: ValidateEmailResponse) {
    await loginRoutine(
      { accessToken: response.accessToken, refreshToken: response.refreshToken },
      'fromSignup'
    )
    try {
      const user = await api.getnativev1me()

      if (user?.nextBeneficiaryValidationStep) {
        const isUnderage = isUserUnderage(user)
        if (isUnderage) {
          delayedNavigate('SelectSchoolHome', {
            nextBeneficiaryValidationStep: user.nextBeneficiaryValidationStep,
          })
        } else {
          delayedNavigate('VerifyEligibility', {
            nextBeneficiaryValidationStep: user.nextBeneficiaryValidationStep,
          })
        }
      } else {
        delayedNavigate('AccountCreated')
      }
    } catch {
      delayedNavigate('AccountCreated')
    }
  }

  function onEmailValidationFailure() {
    showInfoSnackBar({
      message: t`Ce lien de validation n'est plus valide`,
    })
    delayedNavigate(...homeNavConfig)
  }

  return <LoadingPage />
}
