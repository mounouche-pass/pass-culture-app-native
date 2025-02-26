import React from 'react'
import { ReactTestInstance } from 'react-test-renderer'
import { v4 as uuidv4 } from 'uuid'

import { navigate } from '__mocks__/@react-navigation/native'
import { initialSearchState } from 'features/search/context/reducer'
import { FilterBehaviour, LocationType, RadioButtonLocation } from 'features/search/enums'
import { MAX_RADIUS } from 'features/search/helpers/reducer.helpers'
import { LocationFilter, SearchState, SearchView } from 'features/search/types'
import { Venue } from 'features/venue/types'
import { analytics } from 'libs/analytics'
import { ChangeSearchLocationParam } from 'libs/analytics/logEventAnalytics'
import {
  GeoCoordinates,
  GEOLOCATION_USER_ERROR_MESSAGE,
  GeolocationError,
  GeolocPermissionState,
  GeolocPositionError,
  Position,
} from 'libs/geolocation'
import { SuggestedPlace } from 'libs/place'
import { mockedSuggestedVenues } from 'libs/venue/fixtures/mockedSuggestedVenues'
import { act, fireEvent, render, screen, waitFor } from 'tests/utils'

import { LocationModal, LocationModalProps } from './LocationModal'

const searchId = uuidv4()
const searchState = { ...initialSearchState, searchId }
let mockSearchState = searchState
const mockDispatch = jest.fn()
jest.mock('features/search/context/SearchWrapper', () => ({
  useSearch: () => ({
    searchState: mockSearchState,
    dispatch: mockDispatch,
  }),
}))

const DEFAULT_POSITION: GeoCoordinates = { latitude: 2, longitude: 40 }
let mockPosition: Position = DEFAULT_POSITION
let mockPermissionState = GeolocPermissionState.GRANTED
let mockPositionError: GeolocationError | null = null
const mockTriggerPositionUpdate = jest.fn()
const mockShowGeolocPermissionModal = jest.fn()
const mockHideGeolocPermissionModal = jest.fn()
const mockOnPressGeolocPermissionModalButton = jest.fn()
const mockRequestGeolocPermission = jest.fn()

/* TODO(PC-21140): Remove this mock when update to Jest 28
  In jest version 28, I don't bring that error :
  TypeError: requestAnimationFrame is not a function */
jest.mock('react-native/Libraries/Animated/animations/TimingAnimation')

jest.mock('libs/geolocation/GeolocationWrapper', () => ({
  useGeolocation: () => ({
    permissionState: mockPermissionState,
    userPosition: mockPosition,
    userPositionError: mockPositionError,
    triggerPositionUpdate: mockTriggerPositionUpdate,
    showGeolocPermissionModal: mockShowGeolocPermissionModal,
    hideGeolocPermissionModal: mockHideGeolocPermissionModal,
    onPressGeolocPermissionModalButton: mockOnPressGeolocPermissionModalButton,
    requestGeolocPermission: mockRequestGeolocPermission,
  }),
}))

const mockHideModal = jest.fn()

const Kourou: SuggestedPlace = {
  label: 'Kourou',
  info: 'Guyane',
  geolocation: { longitude: -52.669736, latitude: 5.16186 },
}
const venue: Venue = mockedSuggestedVenues[0]

const mockPlaces: SuggestedPlace[] = Array.from({ length: 10 }).map((_, index) => ({
  label: `place_${index}`,
  info: `info_place_${index}`,
  geolocation: {
    longitude: -52 - index,
    latitude: 15 - index,
  },
}))

const mockVenues: Venue[] = Array.from({ length: 10 }).map((_, index) => ({
  label: `venue_${index}`,
  info: `info_venue_${index}`,
  venueId: index,
}))

const mockIsLoading = false
jest.mock('libs/place', () => ({
  usePlaces: () => ({ data: mockPlaces, isLoading: mockIsLoading }),
  useVenues: () => ({ data: mockVenues, isLoading: mockIsLoading }),
}))
const mockOnClose = jest.fn()

describe('<LocationModal/>', () => {
  afterEach(() => {
    mockPermissionState = GeolocPermissionState.GRANTED
    mockPosition = DEFAULT_POSITION
    mockPositionError = null
  })

  it('should render modal correctly after animation and with enabled submit', async () => {
    renderLocationModal()

    await screen.findByText('Choisir un lieu')

    expect(screen).toMatchSnapshot()
  })

  describe('should navigate on landing page when location filter modal opened from search box', () => {
    it('with the initial state', async () => {
      mockSearchState = searchState
      renderLocationModal()

      await screen.findByText('Choisir un lieu')

      const searchButton = screen.getByText('Rechercher')
      await act(async () => {
        fireEvent.press(searchButton)
      })

      expect(navigate).toHaveBeenCalledWith('TabNavigator', {
        params: {
          ...mockSearchState,
          view: SearchView.Landing,
        },
        screen: 'Search',
      })
    })

    it('with a new location', async () => {
      mockSearchState = searchState
      renderLocationModal()

      await screen.findByText('Choisir un lieu')

      const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
      await act(async () => {
        fireEvent.press(radioButton)
      })

      const searchButton = screen.getByText('Rechercher')
      await act(async () => {
        fireEvent.press(searchButton)
      })

      expect(navigate).toHaveBeenCalledWith('TabNavigator', {
        params: {
          ...mockSearchState,
          locationFilter: { aroundRadius: 100, locationType: 'AROUND_ME' },
          view: SearchView.Landing,
        },
        screen: 'Search',
      })
    })
  })

  it.each`
    locationFilter                                                                   | label                                        | locationType
    ${{ locationType: LocationType.EVERYWHERE }}                                     | ${RadioButtonLocation.EVERYWHERE}            | ${LocationType.EVERYWHERE}
    ${{ locationType: LocationType.AROUND_ME, aroundRadius: MAX_RADIUS }}            | ${RadioButtonLocation.AROUND_ME}             | ${LocationType.AROUND_ME}
    ${{ locationType: LocationType.PLACE, place: Kourou, aroundRadius: MAX_RADIUS }} | ${RadioButtonLocation.CHOOSE_PLACE_OR_VENUE} | ${LocationType.PLACE}
    ${{ locationType: LocationType.VENUE, venue }}                                   | ${RadioButtonLocation.CHOOSE_PLACE_OR_VENUE} | ${LocationType.VENUE}
  `(
    'should select $label radio button by default when location type search state is $locationType',
    async ({
      locationFilter,
      label,
    }: {
      locationFilter: LocationFilter
      label: RadioButtonLocation
    }) => {
      mockSearchState = { ...mockSearchState, locationFilter }
      renderLocationModal()

      await screen.findByText('Choisir un lieu')

      const radioButton = screen.getByTestId(label)

      expect(radioButton.props.accessibilityState).toEqual({ checked: true })
    }
  )

  it('should display error message when select Autour de moi radio button when position is null', async () => {
    mockPosition = null
    mockPositionError = {
      type: GeolocPositionError.SETTINGS_NOT_SATISFIED,
      message: GEOLOCATION_USER_ERROR_MESSAGE[GeolocPositionError.SETTINGS_NOT_SATISFIED],
    }
    renderLocationModal()

    const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
    await act(async () => {
      fireEvent.press(radioButton)
    })

    expect(screen.queryByText(mockPositionError.message)).toBeTruthy()
  })

  it('should display the selected radius when select Autour de moi radio button', async () => {
    mockSearchState = searchState
    renderLocationModal()

    await act(async () => {
      expect(screen.queryByText('Dans un rayon de\u00a0:')).toBeFalsy()
    })

    const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
    await act(async () => {
      fireEvent.press(radioButton)
    })
    expect(screen.queryByText('Dans un rayon de\u00a0:')).toBeTruthy()
  })

  it('should display the slider when select Autour de moi radio button', async () => {
    renderLocationModal()

    await act(async () => {
      expect(screen.queryByTestId('slider')).toBeFalsy()
    })

    const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
    await act(async () => {
      fireEvent.press(radioButton)
    })
    expect(screen.queryByTestId('slider')).toBeTruthy()
  })

  it('should display Aucune localisation in RadioButtonLocation.EVERYWHERE when position is null', async () => {
    mockPosition = null
    renderLocationModal()

    await act(async () => {
      expect(screen.queryByText('Aucune localisation')).toBeTruthy()
    })
  })

  it('should display Partout in RadioButtonLocation.EVERYWHERE when position is not null', async () => {
    renderLocationModal()

    await act(async () => {
      expect(screen.queryByText('Partout')).toBeTruthy()
    })
  })

  it('should show then hide geolocation activation modal if GeolocPermissionState is NEVER_ASK_AGAIN and user choose AROUND_ME then click to open settings', async () => {
    const geolocationModalText =
      'Retrouve toutes les offres autour de chez toi en activant les données de localisation.'
    mockPosition = null
    mockPermissionState = GeolocPermissionState.NEVER_ASK_AGAIN
    renderLocationModal()
    expect(screen.queryByText(geolocationModalText)).toBeFalsy()

    const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
    await act(async () => {
      fireEvent.press(radioButton)
    })

    expect(screen.queryByText(geolocationModalText)).toBeTruthy()

    const openSettingsButton = screen.getByText('Activer la géolocalisation')
    await act(async () => {
      fireEvent.press(openSettingsButton)
    })

    expect(screen.queryByText(geolocationModalText)).toBeFalsy()
  })

  it('should not change location filter on Autour de moi radio button press when position is null', async () => {
    mockPosition = null
    renderLocationModal()

    const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
    await act(async () => {
      fireEvent.press(radioButton)
    })

    expect(radioButton.props.accessibilityState).toEqual({ checked: false })
  })

  it.each([
    [RadioButtonLocation.EVERYWHERE],
    [RadioButtonLocation.AROUND_ME],
    [RadioButtonLocation.CHOOSE_PLACE_OR_VENUE],
  ])(
    'should select %s radio button when pressing it and position is not null',
    async (locationRadioButton) => {
      renderLocationModal()

      const radioButton = screen.getByTestId(locationRadioButton)
      await act(async () => {
        fireEvent.press(radioButton)
      })

      expect(radioButton.props.accessibilityState).toEqual({ checked: true })
    }
  )

  describe('should reset', () => {
    it('the location radio group at "Partout" when pressing reset button and position is null', async () => {
      mockPosition = null
      mockSearchState = searchState
      renderLocationModal()

      const defaultRadioButton = screen.getByTestId(RadioButtonLocation.NO_LOCATION)
      const radioButton = screen.getByTestId(RadioButtonLocation.CHOOSE_PLACE_OR_VENUE)
      expect(defaultRadioButton.props.accessibilityState).toEqual({ checked: true })
      expect(radioButton.props.accessibilityState).toEqual({ checked: false })

      await act(async () => {
        fireEvent.press(radioButton)
      })
      expect(defaultRadioButton.props.accessibilityState).toEqual({ checked: false })
      expect(radioButton.props.accessibilityState).toEqual({ checked: true })

      const resetButton = screen.getByText('Réinitialiser')
      await act(async () => {
        fireEvent.press(resetButton)
      })
      expect(defaultRadioButton.props.accessibilityState).toEqual({ checked: true })
      expect(radioButton.props.accessibilityState).toEqual({ checked: false })
    })

    it('the location radio group at "Autour de moi" when pressing reset button and position is not null', async () => {
      mockSearchState = {
        ...searchState,
        locationFilter: { locationType: LocationType.AROUND_ME, aroundRadius: 50 },
      }
      renderLocationModal()

      const defaultRadioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
      const radioButton = screen.getByTestId(RadioButtonLocation.CHOOSE_PLACE_OR_VENUE)
      expect(defaultRadioButton.props.accessibilityState).toEqual({ checked: true })
      expect(radioButton.props.accessibilityState).toEqual({ checked: false })

      await act(async () => {
        fireEvent.press(radioButton)
      })
      expect(defaultRadioButton.props.accessibilityState).toEqual({ checked: false })
      expect(radioButton.props.accessibilityState).toEqual({ checked: true })

      const resetButton = screen.getByText('Réinitialiser')
      await act(async () => {
        fireEvent.press(resetButton)
      })
      expect(radioButton.props.accessibilityState).toEqual({ checked: false })
      expect(defaultRadioButton.props.accessibilityState).toEqual({ checked: true })
    })

    // FIXME(kopax-polyconseil): aroundRadius value keep jumping from 50 to 100, if defaultValues is set to fixed value, it stop to jump,
    //  I assume there's a problem with the mock of mockSearchState.
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('the around me radius value when pressing reset button', async () => {
      mockSearchState = {
        ...searchState,
        locationFilter: { locationType: LocationType.AROUND_ME, aroundRadius: 50 },
      }
      renderLocationModal()
      await act(async () => {
        expect(screen.getByText('50\u00a0km')).toBeTruthy()
      })

      const resetButton = screen.getByText('Réinitialiser')
      await act(async () => {
        fireEvent.press(resetButton)
      })

      const aroundMeRadioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
      await act(async () => {
        fireEvent.press(aroundMeRadioButton)
      })
      expect(screen.getAllByText(`${MAX_RADIUS}\u00a0km`).length).toEqual(2)
    })

    it('should reset search input place or venue when pressing reset button', async () => {
      mockSearchState = {
        ...searchState,
        locationFilter: { locationType: LocationType.PLACE, place: Kourou, aroundRadius: 10 },
      }
      renderLocationModal()

      const resetButton = screen.getByText('Réinitialiser')
      await act(async () => {
        fireEvent.press(resetButton)
      })

      const choosePlaceOrVenueRadioButton = screen.getByTestId(
        RadioButtonLocation.CHOOSE_PLACE_OR_VENUE
      )
      await act(async () => {
        fireEvent.press(choosePlaceOrVenueRadioButton)
      })

      await act(async () => {
        const searchInput = screen.getByPlaceholderText(`Adresse, cinéma, musée...`)
        expect(searchInput.props.value).toEqual('')
      })
    })
  })

  describe('search reset', () => {
    it('should reset the location search input when pressing the reset icon', async () => {
      const locationFilter: LocationFilter = {
        locationType: LocationType.VENUE,
        venue: mockVenues[0],
      }
      mockSearchState = {
        ...mockSearchState,
        locationFilter,
      }
      renderLocationModal()

      const radioButton = screen.getByTestId(RadioButtonLocation.CHOOSE_PLACE_OR_VENUE)
      await act(async () => {
        fireEvent.press(radioButton)
      })

      const searchInput = screen.getByPlaceholderText(`Adresse, cinéma, musée...`)
      await act(async () => {
        fireEvent(searchInput, 'onFocus')
        fireEvent.changeText(searchInput, 'Paris')
      })

      expect(searchInput.props.value).toEqual('Paris')

      const venue = mockVenues[0]

      await act(async () => {
        fireEvent.press(screen.getByTestId(`${venue.label} ${venue.info}`))
      })

      await act(async () => {
        fireEvent.press(screen.getByTestId('Réinitialiser la recherche'))
      })

      expect(searchInput.props.value).toEqual('')
    })
  })

  describe('should preserve', () => {
    it('the selected place when closing the modal', async () => {
      const locationFilter: LocationFilter = {
        locationType: LocationType.PLACE,
        place: Kourou,
        aroundRadius: 10,
      }
      mockSearchState = {
        ...searchState,
        locationFilter,
      }
      renderLocationModal()

      const searchInput = screen.getByPlaceholderText('Adresse, cinéma, musée...')
      await act(async () => {
        fireEvent(searchInput, 'onChangeText', 'test')
      })

      const previousButton = screen.getByTestId('Fermer')
      await act(async () => {
        fireEvent.press(previousButton)
      })

      expect(searchInput.props.value).toEqual('Kourou')
    })

    it('the selected venue when closing the modal', async () => {
      const locationFilter: LocationFilter = {
        locationType: LocationType.VENUE,
        venue: mockVenues[0],
      }
      mockSearchState = {
        ...mockSearchState,
        locationFilter,
      }
      renderLocationModal()

      const searchInput = screen.getByPlaceholderText('Adresse, cinéma, musée...')
      await act(async () => {
        fireEvent(searchInput, 'onChangeText', 'test')
      })

      const previousButton = screen.getByTestId('Fermer')
      await act(async () => {
        fireEvent.press(previousButton)
      })

      expect(searchInput.props.value).toEqual('venue_0')
    })
  })

  describe('should close the modal', () => {
    it('when pressing search button and not pristine', async () => {
      renderLocationModal()

      await screen.findByText('Choisir un lieu')

      await act(async () => {
        fireEvent.press(screen.getByTestId(RadioButtonLocation.AROUND_ME))
      })

      const searchButton = screen.getByTestId('Rechercher')

      await act(async () => {
        fireEvent.press(searchButton)
      })

      expect(mockHideModal).toHaveBeenCalledTimes(1)
    })

    it('when pressing previous button', async () => {
      renderLocationModal()

      await screen.findByText('Choisir un lieu')

      const previousButton = screen.getByTestId('Fermer')
      fireEvent.press(previousButton)

      expect(mockHideModal).toHaveBeenCalledTimes(1)
    })
  })

  it('should open the request geolocation permission when position is null and permission state is denied when pressing Autour de moi radio button', async () => {
    mockPosition = null
    mockPermissionState = GeolocPermissionState.DENIED
    renderLocationModal()

    await screen.findByText('Choisir un lieu')

    const radioButton = screen.getByTestId(RadioButtonLocation.AROUND_ME)
    await act(async () => {
      fireEvent.press(radioButton)
    })

    expect(mockRequestGeolocPermission).toHaveBeenCalledTimes(1)
  })

  describe('with "Appliquer le filtre" button', () => {
    it('should display alternative button title', async () => {
      renderLocationModal({
        filterBehaviour: FilterBehaviour.APPLY_WITHOUT_SEARCHING,
      })

      await waitFor(() => {
        expect(screen.getByText('Appliquer le filtre')).toBeTruthy()
      })
    })

    it('should update search state when pressing submit button', async () => {
      renderLocationModal({
        filterBehaviour: FilterBehaviour.APPLY_WITHOUT_SEARCHING,
      })

      await screen.findByText('Choisir un lieu')

      await act(async () => {
        fireEvent.press(screen.getByText('Autour de moi'))
      })

      const searchButton = screen.getByText('Appliquer le filtre')
      await act(async () => {
        fireEvent.press(searchButton)
      })

      const expectedSearchParams: SearchState = {
        ...searchState,
        locationFilter: { locationType: LocationType.AROUND_ME, aroundRadius: MAX_RADIUS },
      }

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_STATE',
        payload: expectedSearchParams,
      })
    })
  })

  describe('with "Rechercher" button', () => {
    describe('should navigate on search results', () => {
      it('with actual state with no change when pressing button', async () => {
        mockSearchState = {
          ...searchState,
          view: SearchView.Results,
        }
        renderLocationModal()

        await screen.findByText('Choisir un lieu')

        const searchButton = screen.getByText('Rechercher')
        await act(async () => {
          fireEvent.press(searchButton)
        })

        expect(navigate).toHaveBeenCalledWith('TabNavigator', {
          params: {
            ...mockSearchState,
            view: SearchView.Results,
          },
          screen: 'Search',
        })
      })

      it('with a new radius when changing it with the slider and pressing button', async () => {
        mockSearchState = {
          ...searchState,
          locationFilter: { locationType: LocationType.AROUND_ME, aroundRadius: MAX_RADIUS },
          view: SearchView.Results,
        }
        renderLocationModal()

        await act(async () => {
          const slider = screen.getByTestId('slider').children[0] as ReactTestInstance
          slider.props.onValuesChange([50])
        })

        const searchButton = screen.getByText('Rechercher')
        await act(async () => {
          fireEvent.press(searchButton)
        })

        expect(navigate).toHaveBeenCalledWith('TabNavigator', {
          params: {
            ...mockSearchState,
            locationFilter: { locationType: LocationType.AROUND_ME, aroundRadius: 50 },
            view: SearchView.Results,
          },
          screen: 'Search',
        })
      })
    })

    it.each`
      locationFilter                                                        | label                             | locationType               | eventType
      ${{ locationType: LocationType.EVERYWHERE }}                          | ${RadioButtonLocation.EVERYWHERE} | ${LocationType.EVERYWHERE} | ${{ type: 'everywhere' }}
      ${{ locationType: LocationType.AROUND_ME, aroundRadius: MAX_RADIUS }} | ${RadioButtonLocation.AROUND_ME}  | ${LocationType.AROUND_ME}  | ${{ type: 'aroundMe' }}
    `(
      'should log ChangeSearchLocation event and navigate with $locationType location type when selecting $label radio button and pressing button',
      async ({
        locationFilter,
        label,
        eventType,
      }: {
        locationFilter: LocationFilter
        label: RadioButtonLocation
        eventType: ChangeSearchLocationParam
      }) => {
        mockSearchState = { ...mockSearchState, locationFilter }
        renderLocationModal()

        const radioButton = screen.getByTestId(label)
        await act(async () => {
          fireEvent.press(radioButton)
        })

        const searchButton = screen.getByText('Rechercher')
        await act(async () => {
          fireEvent.press(searchButton)
        })

        expect(analytics.logChangeSearchLocation).toHaveBeenCalledWith(eventType, searchId)

        expect(navigate).toHaveBeenCalledWith('TabNavigator', {
          params: {
            ...mockSearchState,
            locationFilter,
          },
          screen: 'Search',
        })
      }
    )

    it.each`
      locationFilter                                                                          | label                                        | locationType          | eventType
      ${{ locationType: LocationType.VENUE, venue: mockVenues[0] }}                           | ${RadioButtonLocation.CHOOSE_PLACE_OR_VENUE} | ${LocationType.VENUE} | ${{ type: 'venue', venueId: mockVenues[0].venueId }}
      ${{ locationType: LocationType.PLACE, place: mockPlaces[0], aroundRadius: MAX_RADIUS }} | ${RadioButtonLocation.CHOOSE_PLACE_OR_VENUE} | ${LocationType.PLACE} | ${{ type: 'place' }}
    `(
      'should log ChangeSearchLocation event and navigate with $locationType location type when selecting $label radio button, location/venue and pressing button',
      async ({
        locationFilter,
        label,
        eventType,
      }: {
        locationFilter: LocationFilter
        label: RadioButtonLocation
        eventType: ChangeSearchLocationParam
      }) => {
        mockSearchState = { ...mockSearchState, locationFilter }
        renderLocationModal()

        const radioButton = screen.getByTestId(label)
        await act(async () => {
          fireEvent.press(radioButton)
        })

        const searchInput = screen.getByPlaceholderText(`Adresse, cinéma, musée...`)
        await act(async () => {
          fireEvent(searchInput, 'onFocus')
          fireEvent.changeText(searchInput, 'Paris')
        })

        const venueOrPlace =
          locationFilter.locationType === LocationType.VENUE ? mockVenues[0] : mockPlaces[0]

        await act(async () => {
          fireEvent.press(screen.getByTestId(`${venueOrPlace.label} ${venueOrPlace.info}`))
        })

        const searchButton = screen.getByText('Rechercher')
        await act(async () => {
          fireEvent.press(searchButton)
        })

        expect(analytics.logChangeSearchLocation).toHaveBeenCalledWith(eventType, searchId)

        expect(navigate).toHaveBeenCalledWith('TabNavigator', {
          params: {
            ...mockSearchState,
            locationFilter,
          },
          screen: 'Search',
        })
      }
    )
  })

  describe('Modal header buttons', () => {
    it('should display back button on header when the modal is opening from general filter page', async () => {
      renderLocationModal({
        filterBehaviour: FilterBehaviour.APPLY_WITHOUT_SEARCHING,
      })

      await waitFor(() => {
        expect(screen.getByTestId('Revenir en arrière')).toBeTruthy()
      })
    })

    it('should close the modal and general filter page when pressing close button when the modal is opening from general filter page', async () => {
      renderLocationModal({
        filterBehaviour: FilterBehaviour.APPLY_WITHOUT_SEARCHING,
        onClose: mockOnClose,
      })

      await screen.findByText('Choisir un lieu')

      const closeButton = screen.getByTestId('Fermer')
      fireEvent.press(closeButton)

      expect(mockOnClose).toHaveBeenCalledTimes(1)
    })

    it('should only close the modal when pressing close button when the modal is opening from search results', async () => {
      renderLocationModal()

      await screen.findByText('Choisir un lieu')

      const closeButton = screen.getByTestId('Fermer')
      fireEvent.press(closeButton)

      expect(mockOnClose).not.toHaveBeenCalled()
    })
  })
})

function renderLocationModal({
  filterBehaviour = FilterBehaviour.SEARCH,
  onClose,
}: Partial<LocationModalProps> = {}) {
  return render(
    <LocationModal
      title="Localisation"
      accessibilityLabel="Ne pas filtrer sur la localisation et retourner aux résultats"
      isVisible
      hideModal={mockHideModal}
      filterBehaviour={filterBehaviour}
      onClose={onClose}
    />
  )
}
