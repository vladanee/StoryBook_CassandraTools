import { Grid, Typography } from '@mui/material'
import React from 'react'
const ArticleCardTitle = ({ title, isSmallCard }) => {
  return (
    <Grid item xs={12} sx={{ marginBottom: 2 }}>
      <Typography
        fontFamily={'Poppins, sans-serif'}
        sx={{
          fontSize: { sm: isSmallCard ? '16px' : '18px', lg: isSmallCard ? '20px' : '25px' },
          color: '#383D3B',
          fontWeight: 700,
        }}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: '1.2',
          maxHeight: '2.4em',
        }}
      >
        {title ? title : 'No Title'}
      </Typography>
    </Grid>
  )
}

export default ArticleCardTitle
