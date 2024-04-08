import { Box } from '@mui/material'
import { useSearchBox } from 'react-instantsearch-hooks-web'
import CustomSearchBox from '../UI/CustomSearchBox/CustomSearchBox'

const CustomSearch = props => {
  const { refine } = useSearchBox(props)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CustomSearchBox refine={refine} />
    </Box>
  )
}

export default CustomSearch
