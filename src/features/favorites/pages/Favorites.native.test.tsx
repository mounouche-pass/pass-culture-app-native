import React from 'react'

import { useAuthContext } from 'features/auth/AuthContext'
import { initialFavoritesState } from 'features/favorites/context/reducer'
import { useNetInfo } from 'libs/network/useNetInfo'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { cleanup, render } from 'tests/utils'

import { Favorites } from './Favorites'

const mockSearchState = initialFavoritesState
const mockDispatch = jest.fn()

const mockUseNetInfo = useNetInfo as jest.Mock

jest.mock('features/favorites/context/FavoritesWrapper', () => ({
  useFavoritesState: () => ({
    ...mockSearchState,
    dispatch: mockDispatch,
  }),
}))

jest.mock('features/auth/AuthContext')
const mockUseAuthContext = useAuthContext as jest.MockedFunction<typeof useAuthContext>

describe('Favorites component', () => {
  mockUseNetInfo.mockReturnValue({ isConnected: true })

  afterEach(async () => {
    await cleanup()
  })

  it('should render correctly', () => {
    const { toJSON } = renderFavorites({ isLoggedIn: true })
    expect(toJSON()).toMatchSnapshot()
  })

  it('should show non connected page when not logged in', () => {
    const { getByText } = renderFavorites({ isLoggedIn: false })
    expect(getByText('Connecte-toi pour profiter de cette fonctionnalité\u00a0!')).toBeTruthy()
  })

  it('should render offline page when not connected', () => {
    mockUseNetInfo.mockReturnValueOnce({ isConnected: false })
    const renderAPI = renderFavorites({ isLoggedIn: true })
    expect(renderAPI.queryByText('Pas de réseau internet')).toBeTruthy()
  })
})

function renderFavorites({ isLoggedIn }: { isLoggedIn: boolean }) {
  const setIsLoggedIn = jest.fn()
  mockUseAuthContext.mockImplementation(() => ({ isLoggedIn, setIsLoggedIn }))
  // eslint-disable-next-line local-rules/no-react-query-provider-hoc
  return render(reactQueryProviderHOC(<Favorites />))
}
