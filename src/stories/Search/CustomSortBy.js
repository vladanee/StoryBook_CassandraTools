import React from 'react'
import { useSortBy } from 'react-instantsearch-hooks-web'
import CustomFilter from '../UI/Filter/CustomFilter'

function CustomSortBy(props) {
  const { currentRefinement, options, refine } = useSortBy(props)

  return (
    <>
      <CustomFilter
        clearedFilters={props.clearedFilters}
        items={props.items}
        currentRefinement={currentRefinement}
        refine={refine}
      />
    </>
  )
}

export default CustomSortBy
