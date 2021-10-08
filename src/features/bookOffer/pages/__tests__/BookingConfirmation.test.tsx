import React from 'react'
import waitForExpect from 'wait-for-expect'

import { reset, useRoute } from '__mocks__/@react-navigation/native'
import reactNativeInAppReview from '__mocks__/react-native-in-app-review'
import { analytics } from 'libs/analytics'
import { env } from 'libs/environment'
import { fireEvent, render } from 'tests/utils'

import { BookingConfirmation } from '../BookingConfirmation'

jest.mock('features/home/services/useAvailableCredit', () => ({
  useAvailableCredit: jest.fn(() => ({ isExpired: false, amount: 2000 })),
}))

jest.mock('react-query')

const isAvailable = jest.spyOn(reactNativeInAppReview, 'isAvailable').mockImplementation(() => true)

describe('<BookingConfirmation />', () => {
  const mockOfferId = 1337
  beforeEach(() => {
    useRoute.mockImplementation(() => ({
      params: {
        offerId: mockOfferId,
        bookingId: 345,
      },
    }))
  })
  afterEach(jest.clearAllMocks)

  it('should render correctly', () => {
    const page = render(<BookingConfirmation />)
    expect(page).toMatchSnapshot()
  })

  it('should go to Bookings and log analytics event', async () => {
    const renderAPI = render(<BookingConfirmation />)
    fireEvent.press(renderAPI.getByText('Voir ma réservation'))
    await waitForExpect(() => {
      expect(analytics.logSeeMyBooking).toBeCalledWith(mockOfferId)
      expect(reset).toBeCalledWith({
        index: 1,
        routes: [
          {
            name: 'TabNavigator',
            state: {
              routes: [{ name: 'Bookings' }],
              index: 0,
            },
          },
          {
            name: 'BookingDetails',
            params: {
              id: 345,
            },
          },
        ],
      })
    })
  })

  it('should call InAppReview Modal after 3 seconds', async () => {
    env.FEATURE_FLIPPING_ONLY_VISIBLE_ON_TESTING = true
    const requestInAppReview = jest.spyOn(reactNativeInAppReview, 'RequestInAppReview')
    jest.useFakeTimers()

    render(<BookingConfirmation />)
    jest.advanceTimersByTime(3000)
    expect(requestInAppReview).toHaveBeenCalled()
  })
  it('should not call InAppReview Modal if isAvailable is false', async () => {
    env.FEATURE_FLIPPING_ONLY_VISIBLE_ON_TESTING = true
    isAvailable.mockImplementationOnce(() => false)
    const requestInAppReview = jest.spyOn(reactNativeInAppReview, 'RequestInAppReview')
    jest.useFakeTimers()

    render(<BookingConfirmation />)
    jest.advanceTimersByTime(3000)
    expect(requestInAppReview).toHaveBeenCalledTimes(0)
  })
})
