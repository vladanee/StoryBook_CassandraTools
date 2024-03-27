import { Box, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'

const ArticleViewMoreButton = ({ id }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'flex-end',
        width: '100%',
        justifyContent: 'flex-end',
      }}
    >
      <Link to={`/${id}`}>
        {' '}
        <Typography
          sx={{
            color: '#535A57',
            textDecoration: 'underline',
            fontSize: { xs: '12px', lg: '20px' },
            fontFamily: 'Lato, sans-serif',
          }}
        >
          View More
        </Typography>
      </Link>
    </Box>
  )
}

export default ArticleViewMoreButton
