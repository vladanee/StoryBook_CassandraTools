import { Box, Typography } from '@mui/material'
import React from 'react'

const BannerTitle = ({ title, subTitle }) => {
  return (
    <Box>
      {title && (
        <Typography
          fontFamily={'Poppins, sans-serif'}
          sx={{
            fontWeight: 700,
            fontSize: { xs: '24px', lg: '32px' },
            color: '#333146',
            marginBottom: 3,
          }}
        >
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{ fontSize: { xs: '16px', lg: '20px' }, color: '#4E4D4D', fontWeight: 400 }}
        >
          {subTitle}
        </Typography>
      )}
    </Box>
  )
}

export default BannerTitle
