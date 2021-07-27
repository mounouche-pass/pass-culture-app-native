import { t } from '@lingui/macro'
import React from 'react'
import styled from 'styled-components/native'

import { DomainsCredit, ExpenseDomain } from 'api/gen'
import { CreditCeiling } from 'features/profile/components/CreditCeiling'
import { convertCentsToEuros } from 'libs/parsers/pricesConversion'
import { AccordionItem } from 'ui/components/AccordionItem'
import { DashedSeparator } from 'ui/components/DashedSeparator'
import { getSpacing, Spacer, Typo } from 'ui/theme'

import { accordionStyle, GreyContainer, Description } from './reusables'

type BeneficiaryCeilingsProps = {
  domainsCredit?: DomainsCredit | null
}

const EXPENSE_DOMAIN_ORDER = [ExpenseDomain.Digital, ExpenseDomain.Physical, ExpenseDomain.All]

const ceilingsQuestions = {
  physicalAndDigital: t`Pourquoi les biens physiques et numériques sont-ils limités ?`,
  digital: t`Pourquoi les biens numériques sont-ils limités ?`,
}

const ceilingsDescription = {
  physicalAndDigital: t`Ces plafonds ont été mis en place pour favoriser la diversification des pratiques culturelles. Aucune dérogation à ces plafonds n'est possible.`,
  digital: t`Ce plafond a été mis en place pour favoriser la diversification des pratiques culturelles. Aucune dérogation à ce plafond n'est possible.`,
}

const getOrderedCeilings = (domainsCredit: DomainsCredit) => {
  const credits = []

  for (const domain of EXPENSE_DOMAIN_ORDER) {
    const credit = domainsCredit[domain]
    if (credit) {
      credits.push({ domain, initial: credit.initial, remaining: credit.remaining })
    }
  }

  return credits
}

export function BeneficiaryCeilings(props: BeneficiaryCeilingsProps) {
  const hasPhysicalCeiling = !!props.domainsCredit && !!props.domainsCredit.physical
  const ceilingKey = hasPhysicalCeiling ? 'physicalAndDigital' : 'digital'
  const question = ceilingsQuestions[ceilingKey]
  const description =
    t`Le but du pass Culture est de renforcer tes pratiques culturelles, mais aussi d'en créer de nouvelles.` +
    '\u0020' +
    ceilingsDescription[ceilingKey]

  return (
    <GreyContainer>
      <Spacer.Column numberOfSpaces={6} />
      <Title>{t`Tu peux encore dépenser :`}</Title>
      <Spacer.Column numberOfSpaces={5} />
      {!!props.domainsCredit && (
        <CeilingsRow>
          {getOrderedCeilings(props.domainsCredit).map((credit) => (
            <CreditCeiling
              key={credit.domain}
              amount={convertCentsToEuros(credit.remaining)}
              initial={convertCentsToEuros(credit.initial)}
              domain={credit.domain}
              hasPhysicalCeiling={hasPhysicalCeiling}
            />
          ))}
        </CeilingsRow>
      )}
      <Spacer.Column numberOfSpaces={6} />
      <DashedSeparator dashGap={4} dashLength={1} dashThickness={1} />
      <AccordionItem
        title={<Typo.ButtonText>{question}</Typo.ButtonText>}
        titleStyle={accordionStyle.title}
        bodyStyle={accordionStyle.body}>
        <Description>{description}</Description>
      </AccordionItem>
      <Spacer.Column numberOfSpaces={2} />
    </GreyContainer>
  )
}

const Title = styled(Typo.Title4)({
  paddingHorizontal: getSpacing(4),
})

const CeilingsRow = styled.View({
  paddingHorizontal: getSpacing(3),
  flexDirection: 'row',
  alignItems: 'flex-start',
})
