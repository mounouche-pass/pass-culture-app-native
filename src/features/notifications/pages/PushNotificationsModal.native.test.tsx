import React from 'react'

import { analytics } from 'libs/analytics'
import { fireEvent, render } from 'tests/utils'

import { PushNotificationsModal } from './PushNotificationsModal'

const onDismiss = jest.fn()
const onRequestPermission = jest.fn()

describe('PushNotificationsModal', () => {
  it('should render properly', () => {
    const renderAPI = render(
      <PushNotificationsModal
        onDismiss={onDismiss}
        visible
        onRequestPermission={onRequestPermission}
      />
    )
    expect(renderAPI).toMatchSnapshot()
  })

  it('should open settings and log event logOpenNotificationSettings', () => {
    const renderAPI = render(
      <PushNotificationsModal
        onDismiss={onDismiss}
        visible
        onRequestPermission={onRequestPermission}
      />
    )
    fireEvent.press(renderAPI.getByText('Autoriser les notifications'))
    expect(analytics.logOpenNotificationSettings).toHaveBeenCalledTimes(1)
    expect(onRequestPermission).toHaveBeenCalledTimes(1)
    expect(onDismiss).not.toBeCalled()
  })
})
