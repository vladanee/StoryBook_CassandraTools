import { usePagination } from 'react-instantsearch-hooks-web'
import Pagination from '../UI/Pagination/Pagination'

function CustomPagination(props) {
  const { currentRefinement, nbPages, refine } = usePagination(props)

  return <Pagination currentRefinement={currentRefinement} nbPages={nbPages} refine={refine} />
}

export default CustomPagination
