import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { Link } from 'gatsby'
const ErrorPageBannerText = ({ title, subTitle, description, navigateTo, buttonDescription }) => {
  return (
    <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
      <Box>
        <Typography
          sx={{
            textTransform: 'capitalize',
            fontWeight: 700,
            fontSize: { xs: '50px', md: '60px', lg: '83px' },
          }}
          fontFamily={'Poppins,sans-serif'}
        >
          {title && title}
        </Typography>
        <Typography
          sx={{
            textTransform: 'capitalize',
            fontWeight: 700,
            fontSize: { xs: '50px', md: '60px', lg: '83px' },
          }}
          fontFamily={'Poppins,sans-serif'}
        >
          {subTitle && subTitle}
        </Typography>
      </Box>
      <Box sx={{ marginY: { xs: '35px', md: '55px' }, width: { sm: '70%' } }}>
        <Typography
          sx={{ fontSize: { xs: '20px', sm: '18px', lg: '24px' } }}
          fontFamily={'Poppins, sans-serif'}
        >
          {description && description}
        </Typography>
      </Box>

      <Box>
        <Link to={navigateTo ? navigateTo : '/'}>
          <Button
            sx={{
              textTransform: 'capitalize',
              borderRadius: '15px',
              padding: { xs: '11px 30px', lg: '11px 55px' },
              background:
                'linear-gradient(151.93deg, #00C3CD -22.63%, #CFF0FF 257.91%, #9DE7EE 257.91%, #FF626E 257.91%)',
              '&:hover': {
                background:
                  'linear-gradient(151.93deg, #00859B -22.63%, #BED8E2 257.91%, #8CC2D3 257.91%, #EE3D4C 257.91%)',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography
              sx={{ color: '#FFFFFF', fontSize: { sm: '18px', xl: '28px' } }}
              fontFamily={'Open Sans,sans-serif'}
            >
              {buttonDescription ? buttonDescription : 'back to homepage'}
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default ErrorPageBannerText
