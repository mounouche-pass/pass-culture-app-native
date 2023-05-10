import { rest } from 'msw'
import React from 'react'

import { HomeModule } from 'features/home/components/modules/HomeModule'
import {
  formattedBusinessModule,
  formattedCategoryListModule,
  formattedExclusivityModule,
} from 'features/home/fixtures/homepage.fixture'
import { env } from 'libs/environment'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { server } from 'tests/server'
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

  it('should display ExclusivityModule', async () => {
    server.use(
      rest.get(env.API_BASE_URL + '/native/v1/offer/123456789', async (_, res, ctx) =>
        res.once(
          ctx.status(200),
          ctx.json({
            id: 87829841,
            accessibility: {
              audioDisability: false,
              mentalDisability: true,
              motorDisability: false,
              visualDisability: true,
            },
            description:
              'Vivez une expérience immersive à l’Opéra national de Lorraine ! L’Opéra vous convie à une soirée exceptionnelle riche de rencontres et de musique. Soyez parmi les heureux 60 bénéficiaires d’un accueil privilégié en coulisses et en salle le soir de la dernière représentation de Manru.\n17h45: ouverture des portes – pot d’accueil. \n18h05 – 18h35: visites de l’Opéra et ses coulisses. \n18h40 – 18h55: visite plateau. \n19h-19h10: rencontre artiste en salle. \n19h15: conférence 1h avant Foyer Public. \n20h: représentation. \nTarif exceptionnel : 10€ en catégorie A (au lieu de 60€)',
            expenseDomains: ['all'],
            externalTicketOfficeUrl:
              'https://indiv.themisweb.fr/0458/fChoixSeance.aspx?idstructure=0458&EventId=462&request=QcE+w0WHSuCAMC+Zl9Nsackx8tqQHuYZlDwI1xAiDUwhooscLwwHFU+9s0VY6a3G',
            extraData: {
              author: 'Ignacy Jan Paderewski',
              durationMinutes: 165,
              isbn: '',
              musicSubType: null,
              musicType: null,
              performer: '',
              showSubType: 'Grand opéra',
              showType: 'Opéra',
              stageDirector: 'Katharina Kastening',
              speaker: '',
              visa: '',
            },
            isExpired: false,
            isForbiddenToUnderage: false,
            isReleased: true,
            isSoldOut: false,
            isDigital: false,
            isDuo: true,
            isEducational: false,
            name: 'Soirée privée à l’Opéra - Manru',
            stocks: [
              {
                id: 93908583,
                beginningDatetime: '2023-05-16T18:00:00Z',
                bookingLimitDatetime: '2023-05-15T18:00:00Z',
                cancellationLimitDatetime: '2023-05-12T14:40:42.419214Z',
                isBookable: true,
                isForbiddenToUnderage: false,
                isSoldOut: false,
                isExpired: false,
                price: 1000,
                activationCode: null,
                priceCategoryLabel: 'Tarif unique',
                remainingQuantity: 55,
              },
            ],
            subcategoryId: 'SPECTACLE_REPRESENTATION',
            image: {
              url: 'https://storage.googleapis.com/passculture-metier-prod-production-assets-fine-grained/thumbs/mediations/BNJSG',
              credit: '',
            },
            venue: {
              id: 7845,
              address: '1 RUE SAINTE CATHERINE',
              city: 'NANCY',
              offerer: {
                name: 'REGIE PERSONNALISEE OPERA NATIONAL LORRAINE',
              },
              name: 'REGIE PERSONNALISEE OPERA NATIONAL LORRAINE',
              postalCode: '54000',
              publicName: 'Opéra national de Lorraine',
              coordinates: {
                latitude: 48.69393,
                longitude: 6.18427,
              },
              isPermanent: true,
            },
            withdrawalDetails: null,
          })
        )
      )
    )
    render(
      // eslint-disable-next-line local-rules/no-react-query-provider-hoc
      reactQueryProviderHOC(
        <HomeModule item={formattedExclusivityModule} index={0} homeEntryId={'aléatoire'} />
      )
    )
    expect(await screen.findAllByLabelText('Week-end FRAC')).toHaveLength(2)
  })
})
