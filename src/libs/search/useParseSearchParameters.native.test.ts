import { OffersModuleParameters } from 'features/home/types'
import { useParseSearchParameters } from 'libs/search'
import * as parseSearchParametersAPI from 'libs/search/parseSearchParameters'
import { useGenreTypeMapping, useSubcategoryLabelMapping } from 'libs/subcategories/mappings'
import { placeholderData } from 'libs/subcategories/placeholderData'
import { renderHook } from 'tests/utils'

const mockMaxPrice = 172
jest.mock('features/search/helpers/useMaxPrice/useMaxPrice', () => ({
  useMaxPrice: jest.fn(() => mockMaxPrice),
}))

const mockPosition = { latitude: 2, longitude: 40 }
jest.mock('libs/geolocation', () => ({
  useGeolocation: jest.fn(() => ({ position: mockPosition })),
}))

const mockSubcategories = placeholderData.subcategories
const mockGenreTypes = placeholderData.genreTypes
jest.mock('libs/subcategories/useSubcategories', () => ({
  useSubcategories: () => ({
    data: {
      subcategories: mockSubcategories,
      genreTypes: mockGenreTypes,
    },
  }),
}))

describe('useParseSearchParameters', () => {
  const {
    result: { current: subcategoryLabelMapping },
  } = renderHook(useSubcategoryLabelMapping)
  const {
    result: { current: genreTypeMapping },
  } = renderHook(useGenreTypeMapping)

  const parseSearchParametersSpy = jest.spyOn(parseSearchParametersAPI, 'parseSearchParameters')

  it('should set price max parameter when not provided', () => {
    const parameters = {} as OffersModuleParameters
    const { result } = renderHook(useParseSearchParameters)

    result.current(parameters)

    expect(parseSearchParametersSpy).toHaveBeenCalledWith(
      { priceMax: mockMaxPrice, priceMin: 0 },
      mockPosition,
      subcategoryLabelMapping,
      genreTypeMapping
    )
  })

  it('should use price max parameter when provided', () => {
    const priceMax = 12
    const parameters = {} as OffersModuleParameters
    const { result } = renderHook(useParseSearchParameters)

    result.current({ ...parameters, priceMax })

    expect(parseSearchParametersSpy).toHaveBeenCalledWith(
      { priceMax, priceMin: 0 },
      mockPosition,
      subcategoryLabelMapping,
      genreTypeMapping
    )
  })
})