/* eslint-disable no-restricted-imports, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import { useSearchBox as useSearchBoxDefault } from 'react-instantsearch-hooks'
import { UseSearchBoxProps } from 'react-instantsearch-hooks/dist/es/connectors/useSearchBox'
import { AdditionalWidgetProperties } from 'react-instantsearch-hooks/dist/es/hooks/useConnector'

import { env } from 'libs/environment'

export * from 'react-instantsearch-hooks'

// In integration we don't want autocomplete, this mock allow us to have only one SearchBox component
export const mockUseSearchBox = (
  props?: UseSearchBoxProps,
  additionalWidgetProperties?: AdditionalWidgetProperties
) => ({
  clear: () => {},
  query: '',
  refine: () => {},
})

export const useSearchBox = env.ENV === 'integration' ? mockUseSearchBox : useSearchBoxDefault
