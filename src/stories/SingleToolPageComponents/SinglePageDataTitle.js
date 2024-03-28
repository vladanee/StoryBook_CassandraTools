import { Box, Typography } from '@mui/material'
import React from 'react'

const SinglePageDataTitle = ({ title }) => {
  const formattedTitle = title.replace('/', ' ')
  return (
    <Box sx={{ marginY: '40px' }}>
      <Typography
        sx={{ fontSize: { xs: '40px', lg: '80px' }, textTransform: 'capitalize', fontWeight: 700 }}
        fontFamily={'Poppins, sans-serif'}
      >
        {formattedTitle}
      </Typography>
    </Box>
  )
}

export default SinglePageDataTitle
