import { SearchOptions } from '@algolia/client-search'

import { VenueResponse } from 'api/gen'
import { SearchState } from 'features/search/types'
import { AlgoliaHit } from 'libs/algolia'
import { Geoloc as AlgoliaGeoloc } from 'libs/algolia/algolia.d'
import { transformOfferHit } from 'libs/algolia/fetchAlgolia/transformOfferHit'
import { Position } from 'libs/geolocation'
import { VenueTypeCode } from 'libs/parsers'

/**
 * See Algolia doc on numericFilters and facetFilters
 *
 * [['A', 'B'], 'C'] <=> (A OR B) AND C
 */
export type FiltersArray = string[][]

export interface SearchParametersQuery extends SearchState {
  page: number
}

export const transformHit = transformOfferHit

// An incomplete search hit may not have a subcategoryId (for retrocompatibility)
export type IncompleteSearchHit = AlgoliaHit

export type Geoloc = AlgoliaGeoloc

export type VenueHit = Pick<
  VenueResponse,
  | 'accessibility'
  | 'bannerUrl'
  | 'contact'
  | 'description'
  | 'id'
  | 'latitude'
  | 'longitude'
  | 'name'
  | 'publicName'
> & {
  venueTypeCode: VenueTypeCode
}

export interface AlgoliaQueryParameters {
  query: string
  requestOptions?: SearchOptions //TODO(EveJulliard): rajouter RequestOptions au typage.
}

export interface FetchVenuesParameters {
  query: string
  attributesToHighlight?: string[]
}
export interface FetchOfferParameters {
  parameters: SearchParametersQuery
  userLocation: Position
  isUserUnderage: boolean
  storeQueryID?: (queryID?: string) => void
  indexSearch?: string
}

export interface AlgoliaVenue {
  objectID: string
  city: string
  name: string
  offerer_name: string
  venue_type: string
  description: string
  audio_disability: boolean | null
  mental_disability: boolean | null
  motor_disability: boolean | null
  visual_disability: boolean | null
  email: string | null
  phone_number: string | null
  website: string | null
  facebook: string | null
  twitter: string | null
  instagram: string | null
  snapchat: string | null
  banner_url: string | null
  _geoloc: Geoloc
}
