import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useRoute } from '__mocks__/@react-navigation/native'
import { UserData } from 'features/search/types'
import { GeoCoordinates } from 'libs/geolocation'
import { render, screen } from 'tests/utils'

import { SearchListHeader } from './SearchListHeader'

const searchId = uuidv4()

let mockUserData: UserData[] = []
jest.mock('features/search/api/useSearchResults/useSearchResults', () => ({
  useSearchResults: () => ({
    userData: mockUserData,
  }),
}))

const DEFAULT_POSITION = { latitude: 2, longitude: 40 } as GeoCoordinates
let mockPosition: GeoCoordinates | null = DEFAULT_POSITION
const mockShowGeolocPermissionModal = jest.fn()

jest.mock('libs/geolocation/GeolocationWrapper', () => ({
  useGeolocation: () => ({
    position: mockPosition,
    showGeolocPermissionModal: mockShowGeolocPermissionModal,
  }),
}))

describe('<SearchListHeader />', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should display the number of results', () => {
    useRoute.mockReturnValueOnce({
      params: { searchId },
    })
    render(<SearchListHeader nbHits={10} />)

    expect(screen.getByText('10 résultats')).toBeTruthy()
  })

  it('should not display the geolocation button if position is not null', () => {
    render(<SearchListHeader nbHits={10} />)
    expect(screen.queryByText('Géolocalise-toi')).toBeFalsy()
  })

  it('should display the geolocation incitation button when position is null', () => {
    mockPosition = null
    render(<SearchListHeader nbHits={10} />)

    expect(screen.getByText('Géolocalise-toi')).toBeTruthy()
  })

  it('should display paddingBottom when nbHits is greater than 0', () => {
    mockUserData = [{ message: 'message test' }]

    render(<SearchListHeader nbHits={10} />)
    const bannerContainer = screen.getByTestId('banner-container')
    expect(bannerContainer.props.style).toEqual([{ paddingBottom: 16, paddingHorizontal: 24 }])
  })

  it('should not display paddingBottom when nbHits is equal to 0', () => {
    mockUserData = [{ message: 'message test' }]

    render(<SearchListHeader nbHits={0} />)
    const bannerContainer = screen.getByTestId('banner-container')
    expect(bannerContainer.props.style).not.toEqual([{ paddingBottom: 16, paddingHorizontal: 24 }])
  })
})