import React from 'react'

import { QuitIdentityCheckModal } from 'features/identityCheck/components/QuitIdentityCheckModal'
import { navigateToHome } from 'features/navigation/helpers'
import { fireEvent, render } from 'tests/utils'

jest.mock('features/navigation/helpers')
const mockHideModal = jest.fn()

describe('<QuitIdentityCheckModal/>', () => {
  it('should not display the modal when visible is false', () => {
    const { queryByText } = renderQuitIdentityCheckModal(false)

    const title = queryByText("Veux-tu abandonner la vérification d'identité ?")
    expect(title).toBeFalsy()
  })

  it('should display the modal when visible is true', () => {
    const { queryByText } = renderQuitIdentityCheckModal(true)

    const title = queryByText("Veux-tu abandonner la vérification d'identité ?")
    expect(title).toBeTruthy()
  })

  it('should call resume function when clicking on "Continuer la vérification"', () => {
    const { getByText } = renderQuitIdentityCheckModal(true)

    const resumeButton = getByText('Continuer la vérification')
    fireEvent.press(resumeButton)

    expect(mockHideModal).toHaveBeenCalled()
  })

  it('should go back to homepage when clicking on "Abandonner la vérification"', () => {
    const { getByText } = renderQuitIdentityCheckModal(true)

    const abandonButton = getByText('Abandonner la vérification')
    fireEvent.press(abandonButton)

    expect(navigateToHome).toBeCalled()
  })
})

function renderQuitIdentityCheckModal(visible: boolean) {
  const props = {
    visible: visible,
    hideModal: mockHideModal,
    testIdSuffix: 'quit-identity-check-stepper',
  }
  return render(<QuitIdentityCheckModal {...props} />)
}
