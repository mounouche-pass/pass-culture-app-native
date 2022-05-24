import { renderHook } from '@testing-library/react-hooks'
import { rest } from 'msw'

import { useAccountSuspensionDate } from 'features/auth/suspendedAccount/SuspendedAccount/useAccountSuspensionDate'
import { env } from 'libs/environment'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { server } from 'tests/server'

const expectedResponse = { date: '2022-05-11T10:29:25.332786Z' }
function simulateSuspensionDate200() {
  server.use(
    rest.get(env.API_BASE_URL + '/native/v1/account/suspension_date', async (_, res, ctx) =>
      res(ctx.status(200), ctx.json(expectedResponse))
    )
  )
}

function simulateSuspensionDateActiveAccount() {
  server.use(
    rest.get(env.API_BASE_URL + '/native/v1/account/suspension_date', async (_, res, ctx) =>
      res(ctx.status(403))
    )
  )
}

describe('useAccountSuspensionDate', () => {
  it('should return suspension date if it exists', async () => {
    simulateSuspensionDate200()
    const { result, waitFor } = renderSuspensionDateHook()

    await waitFor(() => result.current.data !== undefined)
    expect(result.current.data?.date).toBe(expectedResponse.date)
  })

  it('should return undefined for unsuspended user', async () => {
    simulateSuspensionDateActiveAccount()
    const { result } = renderSuspensionDateHook()

    expect(result.current.data).toBeUndefined()
  })
})

const renderSuspensionDateHook = () =>
  renderHook(() => useAccountSuspensionDate(), {
    /* eslint-disable local-rules/no-react-query-provider-hoc */
    wrapper: ({ children }) => reactQueryProviderHOC(children),
  })