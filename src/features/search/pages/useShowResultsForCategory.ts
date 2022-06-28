import { useCallback } from 'react'

import { OnPressCategory } from 'features/search/components/CategoriesButtons'
import { useStagedSearch } from 'features/search/pages/SearchWrapper'

import { useShowResultsWithStagedSearch } from './useShowResultsWithStagedSearch'

export const useShowResultsForCategory = (): OnPressCategory => {
  const { dispatch: stagedDispatch } = useStagedSearch()
  const showResultsWithStagedSearch = useShowResultsWithStagedSearch()

  return useCallback(
    (pressedCategory) => {
      stagedDispatch({ type: 'SET_CATEGORY', payload: [pressedCategory] })
      showResultsWithStagedSearch()
    },
    [stagedDispatch, showResultsWithStagedSearch]
  )
}
