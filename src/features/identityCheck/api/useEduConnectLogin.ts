import { useCallback, useEffect, useState } from 'react'
import { Platform } from 'react-native'

import { useIdentityCheckNavigation } from 'features/identityCheck/useIdentityCheckNavigation'
import { eduConnectClient } from 'libs/eduConnectClient'

export function useEduConnectLogin() {
  const { navigateToNextScreen } = useIdentityCheckNavigation()
  const [loginUrl, setLoginUrl] = useState<string>()
  const [error, setError] = useState<Error | null>(null)

  const getLoginUrl = useCallback(async () => {
    try {
      const accessToken = await eduConnectClient.getAccessToken()

      const response = await fetch(`${eduConnectClient.getLoginUrl()}?redirect=false`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        mode: 'cors',
        credentials: 'include',
      })

      if (response.ok) {
        const finalURL = response.headers.get('educonnect-redirect')
        if (finalURL) {
          setLoginUrl(finalURL)
          return
        }
      }
      setError(new Error('Failed to get EduConnect login url'))
    } catch (err) {
      setError(err as Error | null)
    }
  }, [])

  useEffect(() => {
    getLoginUrl().catch(setError)
  }, [getLoginUrl])

  const openEduConnectForm = useCallback(async () => {
    if (Platform.OS === 'web') {
      globalThis.window.open(loginUrl, '_blank')
      // we need to refetch educonnect login url every time we open educonnect form on web platform
      // to get a new login url otherwise if we try to refresh or update credentials, the login url is invalid
      await getLoginUrl()
    } else {
      navigateToNextScreen()
    }
  }, [getLoginUrl, loginUrl, navigateToNextScreen])

  return { openEduConnectForm, loginUrl, error }
}
