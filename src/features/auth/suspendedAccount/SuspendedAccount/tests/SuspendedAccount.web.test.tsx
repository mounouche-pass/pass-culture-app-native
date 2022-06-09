import React from 'react'
import waitForExpect from 'wait-for-expect'

import { navigate } from '__mocks__/@react-navigation/native'
import { navigateToHomeConfig } from 'features/navigation/helpers'
import { fireEvent, render } from 'tests/utils/web'

import { SuspendedAccount } from '../SuspendedAccount'

const mockSettings = {
  allowAccountReactivation: true,
}

jest.mock('features/navigation/helpers')
jest.mock('features/auth/settings', () => ({
  useAppSettings: jest.fn(() => ({
    data: mockSettings,
  })),
}))

describe('<SuspendedAccount />', () => {
  it('should match snapshot', () => {
    expect(render(<SuspendedAccount />)).toMatchSnapshot()
  })

  it('should go to home page when clicking on go to home button', async () => {
    const { getByText } = render(<SuspendedAccount />)

    const homeButton = getByText("Retourner à l'accueil")
    fireEvent.click(homeButton)

    await waitForExpect(() => {
      expect(navigate).toBeCalledWith(navigateToHomeConfig.screen, navigateToHomeConfig.params)
    })
  })
})
