import React from 'react'

import { HomeModule } from 'features/home/components/modules/HomeModule'
import {
  formattedBusinessModule,
  formattedCategoryListModule,
} from 'features/home/fixtures/homepage.fixture'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { render, screen } from 'tests/utils'

describe('HomeModule', () => {
  it('should display business module', async () => {
    render(
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      reactQueryProviderHOC(
        <HomeModule item={formattedBusinessModule} index={0} homeEntryId={'aléatoire'} />
      )
    )

    expect(await screen.findByText('Débloque ton crédit\u00a0! ')).toBeTruthy()
  })

  it('should display CategoryListModule', async () => {
    render(
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      reactQueryProviderHOC(
        <HomeModule item={formattedCategoryListModule} index={0} homeEntryId={'aléatoire'} />
      )
    )

    expect(await screen.findByText('Cette semaine sur le pass')).toBeTruthy()
  })
})
