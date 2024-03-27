import { Box, Chip } from '@mui/material'
import React from 'react'

const ArticleTagsComponent = ({ cardTagsItems }) => {
  return (
    <Box sx={{ position: 'absolute', width: '33%', top: 0, right: 0, left: 0, display: 'flex' }}>
      {cardTagsItems &&
        cardTagsItems.slice(0, 3).map((tag, index) => (
          <Box key={index}>
            <Chip
              label={tag.length > 10 ? tag.slice(0, 10) + '...' : tag}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={700}
              sx={{
                justifyContent: 'start',
                padding: '0px 15px',
                textOverflow: 'initial',
                textTransform: 'capitalize',
                backgroundColor:
                  index % 3 === 1 ? '#0084CD' : index % 3 === 2 ? '#C1E9FF' : '#333146',
                borderRadius: index === 0 && '8px',
                borderTopRightRadius: index === 2 ? '8px' : '0px',
                borderBottomRightRadius: index === 2 ? '8px' : '0px',
                borderColor: 'transparent',
                fontSize: { xs: '8px', sm: '10px', md: '8px', lg: '15px' },
                color: '#fff',
                '& .MuiChip-label': {
                  padding: '0px 0px 0px 5px',
                },
              }}
            />
          </Box>
        ))}
    </Box>
  )
}

export default ArticleTagsComponent
