import React from 'react'

import { SuggestedPlaces } from 'features/search/pages/SuggestedPlaces/SuggestedPlaces'
import { Venue } from 'features/venue/types'
import { SuggestedPlace } from 'libs/place'
import { buildSuggestedPlaces } from 'libs/place/fetchPlaces'
import { mockedSuggestedPlaces } from 'libs/place/fixtures/mockedSuggestedPlaces'
import { fireEvent, render } from 'tests/utils'

let mockPlaces: SuggestedPlace[] = []
const mockVenues: Venue[] = []

let mockIsLoading = false
jest.mock('libs/place', () => ({
  usePlaces: () => ({ data: mockPlaces, isLoading: mockIsLoading }),
  useVenues: () => ({ data: mockVenues, isLoading: mockIsLoading }),
}))

const mockSetSelectedPlaceOrVenue = jest.fn()

describe('<SuggestedPlaces/>', () => {
  it('should call setSelectedPlaceOrVenue when selecting a place', () => {
    mockPlaces = buildSuggestedPlaces(mockedSuggestedPlaces)
    const { getByTestId } = render(
      <SuggestedPlaces query="paris" setSelectedPlaceOrVenue={mockSetSelectedPlaceOrVenue} />
    )

    fireEvent.press(getByTestId(`${mockPlaces[1].label} ${mockPlaces[1].info}`))

    expect(mockSetSelectedPlaceOrVenue).toHaveBeenCalledWith(mockPlaces[1])
  })

  it('should show empty component only when query is not empty and the results are not loading', () => {
    mockPlaces = []
    mockIsLoading = false
    const { getByText } = render(
      <SuggestedPlaces query="paris" setSelectedPlaceOrVenue={mockSetSelectedPlaceOrVenue} />
    )
    expect(getByText('Aucun lieu ne correspond à ta recherche')).toBeTruthy()
  })

  it('should not show empty component if the query is empty and the results are not loading', () => {
    mockPlaces = []
    mockIsLoading = false
    const { queryByText } = render(
      <SuggestedPlaces query="" setSelectedPlaceOrVenue={mockSetSelectedPlaceOrVenue} />
    )
    expect(queryByText('Aucun lieu ne correspond à ta recherche')).toBeNull()
  })

  it('should not show empty component if the results are still loading', () => {
    mockPlaces = []
    mockIsLoading = true
    const { queryByText } = render(
      <SuggestedPlaces query="paris" setSelectedPlaceOrVenue={mockSetSelectedPlaceOrVenue} />
    )
    expect(queryByText('Aucun lieu ne correspond à ta recherche')).toBeNull()
  })
})
