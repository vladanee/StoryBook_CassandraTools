import { useMenu } from 'react-instantsearch-hooks-web'
import CustomFilter from '../UI/Filter/CustomFilter'

const TemplateFilter = props => {
  const { items, refine, currentRefinement } = useMenu(props)

  return (
    <CustomFilter
      clearedFilters={props.clearedFilters}
      items={items}
      currentRefinement={currentRefinement}
      refine={refine}
    />
  )
}

export default TemplateFilter
