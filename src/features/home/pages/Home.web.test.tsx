import React from 'react'

import { useRoute } from '__mocks__/@react-navigation/native'
// import { useAuthContext } from 'features/auth/AuthContext'
import { useHomepageData } from 'features/home/api/useHomepageData'
import { modules } from 'features/home/fixtures/modules'
// import { useAvailableCredit } from 'features/user/helpers/useAvailableCredit'
import { useNetInfoContext as useNetInfoContextDefault } from 'libs/network/NetInfoWrapper'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { render, checkAccessibilityFor } from 'tests/utils/web'

import { Home } from './Home'

jest.mock('features/home/api/useShowSkeleton', () => ({
  useShowSkeleton: jest.fn(() => false),
}))

jest.mock('features/home/api/useHomepageData')
const mockUseHomepageData = useHomepageData as jest.Mock

jest.mock('libs/network/useNetInfo', () => jest.requireMock('@react-native-community/netinfo'))
const mockUseNetInfoContext = useNetInfoContextDefault as jest.Mock

jest.mock('features/auth/AuthContext')
// const mockUseAuthContext = useAuthContext as jest.Mock

jest.mock('features/user/helpers/useAvailableCredit')
// const mockUseAvailableCredit = useAvailableCredit as jest.MockedFunction<typeof useAvailableCredit>

jest.mock('libs/geolocation')

useRoute.mockReturnValue({ params: {} })

mockUseHomepageData.mockReturnValue({
  modules,
  homeEntryId: 'fakeEntryId',
})
mockUseNetInfoContext.mockReturnValue({ isConnected: true })

describe('<Home/>', () => {
  describe('Accessibility', () => {
    it('should not have basic accessibility issues', async () => {
      const { container } = render(<Home />, {
        // eslint-disable-next-line local-rules/no-react-query-provider-hoc
        wrapper: ({ children }) => reactQueryProviderHOC(children),
      })

      const results = await checkAccessibilityFor(container)
      expect(results).toHaveNoViolations()
    })
  })
})
