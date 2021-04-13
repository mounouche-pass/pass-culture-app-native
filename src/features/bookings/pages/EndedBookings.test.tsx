import React from 'react'
import { QueryObserverResult } from 'react-query'

import { BookingsResponse } from 'api/gen'
import * as Queries from 'features/bookings/api/queries'
import { render } from 'tests/utils'

import { bookingsSnap } from '../api/bookingsSnap'

import { EndedBookings } from './EndedBookings'

describe('EndedBookings', () => {
  afterEach(jest.restoreAllMocks)

  it('should always execute the query (in cache or in network)', () => {
    const useBookings = jest.spyOn(Queries, 'useBookings')
    renderEndedBookings(bookingsSnap)
    expect(useBookings).toBeCalledWith(true)
  })
  it('should display the right number of ended bookings', () => {
    const { queryByText } = renderEndedBookings(bookingsSnap)

    expect(queryByText('1\u00a0réservation terminée')).toBeTruthy()
  })
})

const renderEndedBookings = (bookings: BookingsResponse) => {
  jest
    .spyOn(Queries, 'useBookings')
    .mockReturnValue({ data: bookings } as QueryObserverResult<BookingsResponse, unknown>)

  return render(<EndedBookings />)
}
