import { useEduConnectLogin } from 'features/identityCheck/api/useEduConnectLogin'
import { renderHook, waitFor } from 'tests/utils'

const mockFetch = jest.spyOn(global, 'fetch')

const mockNavigateToNextScreen = jest.fn()
jest.mock('features/identityCheck/useIdentityCheckNavigation', () => ({
  useIdentityCheckNavigation: () => ({
    navigateToNextScreen: mockNavigateToNextScreen,
  }),
}))

describe('useEduconnectLogin', () => {
  it('should navigate to next screen when calling openEduConnectForm', () => {
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify({}), {
        headers: {
          'content-type': 'application/json',
          'educonnect-redirect': 'http://finalUrl.com',
        },
        status: 200,
      })
    )
    const { result } = renderHook(() => useEduConnectLogin())

    result.current.openEduConnectForm()

    waitFor(() => {
      expect(mockNavigateToNextScreen).toHaveBeenCalled()
    })
  })
})
