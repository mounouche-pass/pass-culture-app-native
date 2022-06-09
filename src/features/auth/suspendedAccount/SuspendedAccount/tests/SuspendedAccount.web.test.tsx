import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { mocked } from 'ts-jest/utils'
import waitForExpect from 'wait-for-expect'

import { navigate } from '__mocks__/@react-navigation/native'
import { navigateToHome, navigateToHomeConfig } from 'features/navigation/helpers'
import { QueryKeys } from 'libs/queryKeys'
import { fireEvent, render, useMutationFactory } from 'tests/utils/web'
import { SNACK_BAR_TIME_OUT } from 'ui/components/snackBar/SnackBarContext'
import { SnackBarHelperSettings } from 'ui/components/snackBar/types'

import { SuspendedAccount } from '../SuspendedAccount'

const mockSettings = {
  allowAccountUnsuspension: true,
}

jest.mock('features/auth/suspendedAccount/SuspendedAccount/useAccountSuspensionDate', () => ({
  useAccountSuspensionDate: jest.fn(() => ({ data: { date: '2022-05-11T10:29:25.332786Z' } })),
}))
jest.mock('features/navigation/helpers')
jest.mock('features/auth/settings', () => ({
  useAppSettings: jest.fn(() => ({
    data: mockSettings,
  })),
}))

const mockSignOut = jest.fn()
jest.mock('features/auth/AuthContext', () => ({
  useLogoutRoutine: jest.fn(() => mockSignOut.mockResolvedValueOnce(jest.fn())),
}))

jest.mock('react-query')
const mockedUseMutation = mocked(useMutation)

const mockShowErrorSnackBar = jest.fn()
jest.mock('ui/components/snackBar/SnackBarContext', () => ({
  useSnackBarContext: () => ({
    showErrorSnackBar: jest.fn((props: SnackBarHelperSettings) => mockShowErrorSnackBar(props)),
  }),
}))

const useMutationCallbacks: { onError: (error: unknown) => void; onSuccess: () => void } = {
  onSuccess: () => {},
  onError: () => {},
}

describe('<SuspendedAccount />', () => {
  const queryClient = useQueryClient()
  it('should match snapshot', () => {
    expect(render(<SuspendedAccount />)).toMatchSnapshot()
  })

  it.skip('should log analytics and redirect to reactivation screen on success', async () => {
    // @ts-expect-error ts(2345)
    mockedUseMutation.mockImplementationOnce(useMutationFactory(useMutationCallbacks))
    const { getByText } = render(<SuspendedAccount />)

    await fireEvent.click(getByText('Réactiver mon compte'))

    useMutationCallbacks.onSuccess()
    await waitForExpect(() => {
      expect(queryClient.invalidateQueries).toHaveBeenCalledWith(QueryKeys.USER_PROFILE)
      expect(queryClient.invalidateQueries).toHaveBeenCalledWith(QueryKeys.NEXT_SUBSCRIPTION_STEP)
      expect(navigate).toHaveBeenCalledWith('AccountReactivationSuccess')
    })
  })

  it.skip('should log analytics and show error snackbar on error', async () => {
    // @ts-expect-error ts(2345)
    mockedUseMutation.mockImplementationOnce(useMutationFactory(useMutationCallbacks))
    const { getByText } = render(<SuspendedAccount />)

    await fireEvent.click(getByText('Réactiver mon compte'))

    const response = {
      content: { message: 'Une erreur s’est produite pendant la réactivation.' },
      name: 'ApiError',
    }
    useMutationCallbacks.onError(response)
    await waitForExpect(() => {
      expect(mockShowErrorSnackBar).toHaveBeenCalledWith({
        message: response.content.message,
        timeout: SNACK_BAR_TIME_OUT,
      })
    })
  })

  it.skip('should go to home page when clicking on go to home button', async () => {
    const { getByText } = render(<SuspendedAccount />)

    const homeButton = getByText("Retourner à l'accueil")
    fireEvent.click(homeButton)

    await waitForExpect(() => {
      expect(navigate).toBeCalledWith(navigateToHomeConfig.screen, navigateToHomeConfig.params)
      expect(mockSignOut).toBeCalledTimes(1)
    })
  })

  it('should redirect to home if feature is disabled', async () => {
    mockSettings.allowAccountUnsuspension = false
    render(<SuspendedAccount />)

    await waitForExpect(() => {
      expect(navigateToHome).toHaveBeenCalledTimes(1)
    })
  })
})
