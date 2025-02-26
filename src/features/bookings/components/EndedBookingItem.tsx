import React from 'react'
import { useQueryClient } from 'react-query'
import styled from 'styled-components/native'

import { BookingCancellationReasons } from 'api/gen'
import { isDigitalBookingWithoutExpirationDate } from 'features/bookings/helpers/expirationDateUtils'
import { BookingItemProps } from 'features/bookings/types'
import { mergeOfferData } from 'features/offer/components/OfferTile/OfferTile'
import { analytics } from 'libs/analytics'
import { formatToSlashedFrenchDate } from 'libs/dates'
import { useNetInfoContext } from 'libs/network/NetInfoWrapper'
import { QueryKeys } from 'libs/queryKeys'
import { useCategoryId } from 'libs/subcategories'
import { tileAccessibilityLabel, TileContentType } from 'libs/tileAccessibilityLabel'
import { InputRule } from 'ui/components/inputs/rules/InputRule'
import { SNACK_BAR_TIME_OUT, useSnackBarContext } from 'ui/components/snackBar/SnackBarContext'
import { OfferImage } from 'ui/components/tiles/OfferImage'
import { InternalTouchableLink } from 'ui/components/touchableLink/InternalTouchableLink'
import { Valid } from 'ui/svg/icons/Valid'
import { Wrong } from 'ui/svg/icons/Wrong'
import { getSpacing, Spacer, Typo } from 'ui/theme'

import { BookingItemTitle } from './BookingItemTitle'

export const EndedBookingItem = ({ booking }: BookingItemProps) => {
  const { cancellationDate, cancellationReason, dateUsed, stock } = booking
  const categoryId = useCategoryId(stock.offer.subcategoryId)
  const queryClient = useQueryClient()
  const netInfo = useNetInfoContext()
  const { showErrorSnackBar } = useSnackBarContext()

  const isDigitalBookingWithoutExpirationDateValue = isDigitalBookingWithoutExpirationDate(booking)

  const shouldRedirectToBooking = isDigitalBookingWithoutExpirationDateValue && !cancellationReason

  const endedBookingReason = getEndedBookingReason(
    cancellationReason,
    dateUsed,
    isDigitalBookingWithoutExpirationDateValue
  )
  const endedBookingDateLabel = getEndedBookingDateLabel(cancellationDate, dateUsed)

  const accessibilityLabel = tileAccessibilityLabel(TileContentType.BOOKING, {
    name: stock.offer.name,
    dateUsed: dateUsed ? formatToSlashedFrenchDate(dateUsed) : undefined,
    cancellationDate: cancellationDate ? formatToSlashedFrenchDate(cancellationDate) : undefined,
  })

  function handlePressOffer() {
    const { offer } = stock
    if (!offer.id) return
    if (isDigitalBookingWithoutExpirationDateValue) return
    if (netInfo.isConnected) {
      // We pre-populate the query-cache with the data from the search result for a smooth transition
      queryClient.setQueryData(
        [QueryKeys.OFFER, offer.id],
        mergeOfferData({
          ...offer,
          categoryId,
          thumbUrl: offer.image?.url,
          name: offer.name,
          offerId: offer.id,
        })
      )
      analytics.logConsultOffer({ offerId: offer.id, from: 'endedbookings' })
    } else {
      showErrorSnackBar({
        message:
          'Impossible d’afficher le détail de l’offre. Connecte-toi à internet avant de réessayer.',
        timeout: SNACK_BAR_TIME_OUT,
      })
    }
  }

  return (
    <InternalTouchableLink
      enableNavigate={!!netInfo.isConnected}
      navigateTo={
        shouldRedirectToBooking
          ? { screen: 'BookingDetails', params: { id: booking.id } }
          : { screen: 'Offer', params: { id: stock.offer.id, from: 'endedbookings' } }
      }
      onBeforeNavigate={handlePressOffer}
      accessibilityLabel={accessibilityLabel}>
      <ItemContainer>
        <OfferImage imageUrl={stock.offer.image?.url} categoryId={categoryId} />
        <Spacer.Row numberOfSpaces={4} />
        <AttributesView>
          <BookingItemTitle title={stock.offer.name} />
          <EndedReasonAndDate>
            {endedBookingReason}
            <Spacer.Row numberOfSpaces={1} />
            <Typo.CaptionNeutralInfo>{endedBookingDateLabel}</Typo.CaptionNeutralInfo>
          </EndedReasonAndDate>
        </AttributesView>
      </ItemContainer>
    </InternalTouchableLink>
  )
}

const AttributesView = styled.View({
  flex: 1,
  paddingRight: getSpacing(1),
})

const ItemContainer = styled.View({
  flexDirection: 'row',
})

const EndedReasonAndDate = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
})

function getEndedBookingReason(
  cancellationReason?: BookingCancellationReasons | null,
  dateUsed?: string | null,
  isDigitalBookingWithoutExpirationDate?: boolean
) {
  if (dateUsed) {
    return <StyledInputRule title="Réservation utilisée" icon={Valid} isValid noFullWidth />
  }

  if (cancellationReason === BookingCancellationReasons.OFFERER) {
    return <StyledInputRule title="Annulée" icon={Wrong} isValid={false} noFullWidth />
  }

  if (isDigitalBookingWithoutExpirationDate && !cancellationReason) {
    return <StyledInputRule title="Réservation archivée" icon={Valid} isValid noFullWidth />
  }

  return <StyledInputRule title="Réservation annulée" icon={Wrong} isValid={false} noFullWidth />
}

function getEndedBookingDateLabel(cancellationDate?: string | null, dateUsed?: string | null) {
  const endDate = dateUsed ?? cancellationDate
  if (endDate) return `le ${formatToSlashedFrenchDate(endDate)}`
  return null
}

const StyledInputRule = styled(InputRule).attrs(({ theme }) => ({
  iconSize: theme.icons.sizes.smaller,
}))``
