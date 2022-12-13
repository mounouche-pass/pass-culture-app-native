import colorAlpha from 'color-alpha'

import { getBackgroundColor } from 'features/onboarding/helpers/getBackgroundColor'
import { CreditStatus } from 'features/onboarding/types'
import { theme } from 'theme'

describe('getBackgroundColor', () => {
  it.each`
    status                  | expectedBackgroundColor
    ${CreditStatus.COMING}  | ${theme.colors.greyLight}
    ${CreditStatus.ONGOING} | ${theme.colors.white}
    ${CreditStatus.GONE}    | ${colorAlpha(theme.colors.greyLight, 0.5)}
    ${undefined}            | ${colorAlpha(theme.colors.greyLight, 0.5)}
  `(
    'should return $expectedBackgroundColor for $status status',
    ({ status, expectedBackgroundColor }) => {
      expect(getBackgroundColor(theme, status)).toEqual(expectedBackgroundColor)
    }
  )
})
