// Event names can be up to 40 characters long, may only contain alphanumeric characters and underscores
export enum AnalyticsEvent {
  ACCESS_EXTERNAL_OFFER = 'AccessExternalOffer',
  ACCOUNT_DELETION = 'AccountDeletion',
  ACCOUNT_REACTIVATION = 'AccountReactivation',
  ALL_MODULES_SEEN = 'AllModulesSeen',
  ALL_TILES_SEEN = 'AllTilesSeen',
  BACK_TO_HOME_FROM_EDUCONNECT_ERROR = 'BackToHomeFromEduconnectError',
  BOOKING_CONFIRMATION = 'BookingConfirmation',
  BOOKING_ERROR = 'BookingError',
  BOOKING_IMPOSSIBLE_IOS = 'BookingImpossibleiOS',
  BOOKING_OFFER_CONFIRM_DATES = 'BookOfferConfirmDates',
  BOOKING_PROCESS_START = 'BookingProcessStart',
  BUSINESS_BLOCK_CLICKED = 'BusinessBlockClicked',
  BOOKING_DETAILS_SCROLLED_TO_BOTTOM = 'BookingDetailsScrolledToBottom',
  BOOKINGS_SCROLLED_TO_BOTTOM = 'BookingsScrolledToBottom',
  CAMPAIGN_TRACKER_ENABLED = 'CampaignTrackerEnabled',
  CANCEL_BOOKING = 'CancelBooking',
  CANCEL_SIGNUP = 'CancelSignup',
  CHOOSE_LOCATION = 'ChooseLocation',
  CHOOSE_EDUCONNECT_METHOD = 'ChooseEduConnectMethod',
  CHOOSE_UBBLE_METHOD = 'ChooseUbbleMethod',
  CLICK_BOOK_OFFER = 'ClickBookOffer',
  CLICK_SOCIAL_NETWORK = 'ClickSocialNetwork',
  CONFIRM_BOOKING_CANCELLATION = 'ConfirmBookingCancellation',
  CONSULT_ACCESSIBILITY_MODALITIES = 'ConsultAccessibilityModalities',
  CONSULT_AVAILABLE_DATES = 'ConsultAvailableDates',
  CONSULT_ARTICLE_ACCOUNT_DELETION = 'ConsultArticleAccountDeletion',
  CONSULT_DESCRIPTION_DETAILS = 'ConsultDescriptionDetails',
  CONSULT_DISCLAIMER_VALIDATION_MAIL = 'ConsultDisclaimerValidationMail',
  CONSULT_ITINERARY = 'ConsultLocationItinerary',
  CONSULT_HOME = 'ConsultHome',
  CONSULT_OFFER = 'ConsultOffer',
  CONSULT_TUTORIAL = 'ConsultTutorial',
  CONSULT_VENUE = 'ConsultVenue',
  CONSULT_WHOLE_OFFER = 'ConsultWholeOffer',
  CONSULT_WHY_ANNIVERSARY = 'ConsultModalWhyAnniversary',
  CONSULT_WITHDRAWAL_MODALITIES = 'ConsultWithdrawalModalities',
  CONTINUE_CGU = 'ContinueCGU',
  CONTINUE_IDENTITY_CHECK = 'ContinueIdentityCheck',
  CONTINUE_SET_EMAIL = 'ContinueSetEmail',
  CONTINUE_SET_PASSWORD = 'ContinueSetPassword',
  CONTINUE_SET_BIRTHDAY = 'ContinueSetBirthday',
  CONTINUE_SIGNUP = 'ContinueSignup',
  DISCOVER_OFFERS = 'DiscoverOffers',
  ERROR_SAVING_NEW_EMAIL = 'ErrorSavingNewMail',
  EXCLUSIVITY_BLOCK_CLICKED = 'ExclusivityBlockClicked',
  HAS_ACTIVATE_GEOLOC_FROM_TUTORIAL = 'HasActivateGeolocFromTutorial',
  HAS_ADDED_OFFER_TO_FAVORITES = 'HasAddedOfferToFavorites',
  HAS_APPLIED_FAVORITES_SORTING = 'HasAppliedFavoritesSorting',
  HAS_CHANGED_PASSWORD = 'HasChangedPassword',
  HAS_REFUSED_COOKIE = 'HasRefusedCookie',
  HAS_SKIPPED_TUTORIAL = 'HasSkippedTutorial',
  HELP_CENTER_CONTACT_SIGNUP_CONFIRMATION_EMAIL_SENT = 'HelpCenterContactSignUpConfirmation',
  IDENTITY_CHECK_STEP = 'IdentityCheckStep',
  IDENTITY_CHECK_ABORT = 'IdentityCheckAbort',
  IDENTITY_CHECK_SUCCESS = 'IdentityCheckSuccess',
  LOCATION_TOGGLE = 'LocationToggle',
  LOGOUT = 'Logout',
  MAIL_TO = 'MailTo',
  MODIFY_MAIL = 'ModifyMail',
  MODULE_DISPLAYED_ON_HOMEPAGE = 'ModuleDisplayedOnHomePage',
  NOTIFICATION_TOGGLE = 'NotificationToggle',
  NO_SEARCH_RESULT = 'NoSearchResult',
  OFFER_SEEN_DURATION = 'OfferSeenDuration',
  OPEN_DMS_FOREIGN_CITIZEN_URL = 'OpenDMSForeignCitizenURL',
  OPEN_DMS_FRENCH_CITIZEN_URL = 'OpenDMSFrenchCitizenURL',
  OPEN_EXTERNAL_URL = 'OpenExternalURL',
  OPEN_LOCATION_SETTINGS = 'OpenLocationSettings',
  OPEN_NOTIFICATION_SETTINGS = 'OpenNotificationSettings',
  PROFIL_SCROLLED_TO_BOTTOM = 'ProfilScrolledToBottom',
  PROFIL_SIGN_UP = 'ProfilSignUp',
  QUIT_AUTHENTICATION_METHOD_SELECTION = 'QuitAuthenticationMethodSelection',
  QUIT_FAVORITE_MODAL_FOR_SIGN_IN = 'QuitFavoriteModalForSignIn',
  QUIT_IDENTITY_CHECK = 'QuitIdentityCheck',
  RECOMMENDATION_MODULE_SEEN = 'RecommendationModuleSeen',
  REINITIALIZE_FILTERS = 'ReinitializeFilters',
  RESEND_EMAIL_RESET_PASSWORD_EXPIRED_LINK = 'ResendEmailResetPasswordExpiredLink',
  RESEND_EMAIL_SIGNUP_CONFIRMATION_EXPIRED_LINK = 'ResendEmailSignupConfirmationExpiredLink',
  SAVE_NEW_MAIL = 'SaveNewMail',
  SCREEN_VIEW = 'screen_view',
  SEARCH_QUERY = 'SearchQuery',
  SEARCH_SCROLL_TO_PAGE = 'SearchScrollToPage',
  SEE_MORE_CLICKED = 'SeeMoreClicked',
  SEE_MY_BOOKING = 'SeeMyBooking',
  SEND_ACTIVATION_MAIL_AGAIN = 'SendActivationMailAgain',
  SHARE_OFFER = 'Share',
  SHARE_VENUE = 'ShareVenue',
  SIGN_IN_FROM_FAVORITE = 'SignInFromFavorite',
  SIGN_IN_FROM_OFFER = 'SignInFromOffer',
  SIGN_UP_FROM_FAVORITE = 'SignUpFromFavorite',
  SIGN_UP_FROM_OFFER = 'SignUpFromOffer',
  SIGN_UP_TOO_YOUNG = 'SignUpTooYoung',
  START_DMS_TRANSMISSION = 'StartDMSTransmission',
  USE_FILTER = 'UseFilter',
  VENUE_CONTACT = 'VenueContact',
  VENUE_SEE_ALL_OFFERS_CLICKED = 'VenueSeeAllOffersClicked',
  VENUE_SEE_MORE_CLICKED = 'VenueSeeMoreClicked',
}

const RESERVED_PREFIXES = ['firebase_', 'google_', 'ga_']

const FIREBASE_NAME_FORMAT = /^[a-zA-Z][0-9a-zA-Z_]+$/

/* Firebase event naming rules :
https://firebase.google.com/docs/reference/cpp/group/event-names#:~:text=Event%20names%20can%20be%20up,and%20should%20not%20be%20used */
export function validateAnalyticsEvent(eventName: string) {
  if (eventName.length > 40) {
    return false
  }
  for (const reservedKeyword of RESERVED_PREFIXES) {
    if (eventName.startsWith(reservedKeyword)) {
      return false
    }
  }
  if (!eventName.match(FIREBASE_NAME_FORMAT)) {
    return false
  }
  return true
}