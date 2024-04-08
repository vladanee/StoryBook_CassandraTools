import { useMenu } from 'react-instantsearch-hooks-web'
import CustomFilter from '../UI/Filter/CustomFilter'

const CategoryFilter = props => {
  const { items, refine } = useMenu(props)
  return <CustomFilter clearedFilters={props.clearedFilters} items={items} refine={refine} />
}

export default CategoryFilter
