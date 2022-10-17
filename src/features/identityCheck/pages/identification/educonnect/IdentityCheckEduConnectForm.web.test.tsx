import React from 'react'

import * as useEduConnectLoginAPI from 'features/identityCheck/api/useEduConnectLogin'
import { render } from 'tests/utils/web'

import { IdentityCheckEduConnectForm } from './IdentityCheckEduConnectForm'

describe('<IdentityCheckEduConnectForm />', () => {
  it('should render IdentityCheckEduConnectForm', () => {
    jest.spyOn(useEduConnectLoginAPI, 'useEduConnectLogin').mockReturnValueOnce({
      openEduConnectForm: jest.fn(),
      loginUrl: 'https://login/?redirect=false',
      error: null,
    })
    const renderAPI = render(<IdentityCheckEduConnectForm />)

    expect(renderAPI).toMatchSnapshot()
  })
})
