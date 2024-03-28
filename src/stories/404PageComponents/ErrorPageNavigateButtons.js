import { Box, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'

const ErrorPageNavigateButtons = () => {
  return (
    <>
      <Box sx={{ marginY: { xs: '30px', md: '50px', lg: '71px' }, textAlign: 'center' }}>
        <Typography
          sx={{
            fontWeight: 550,
            fontSize: { xs: '35px', md: '50px', lg: '60px' },
            textTransform: 'capitalize',
            letterSpacing: { md: '-2px', lg: '-5px' },
            color: '#333146',
          }}
          fontFamily={'Poppins,sans-serif'}
        >
          find your next cassandra tool{' '}
          <span
            style={{
              color: '#333146',
              textShadow: '-3px -3px 2px #00C3CD',
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Today
          </span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <Typography
            sx={{
              marginRight: 5,
              textTransform: 'capitalize',
              color: '#333146',
              background:
                'linear-gradient(151.93deg, #00C3CD -22.63%, #CFF0FF 257.91%, #9DE7EE 257.91%, #FF626E 257.91%)',
              border: '1px solid #0084CD',
              borderRadius: '15px',
              paddingX: { xs: '20px', sm: '30px', md: '40px', lg: '72px' },
              paddingY: '10px',
              fontSize: { xs: '18px', lg: '25px' },
              textAlign: 'center',
              cursor: 'pointer',
              transition: '0.3s all ease-in-out',
              '&:hover': {
                background:
                  'linear-gradient(151.93deg, #00859B -22.63%, #BED8E2 257.91%, #8CC2D3 257.91%, #EE3D4C 257.91%)',
                color: '#FFFFFF',
              },
            }}
          >
            Browse Tools
          </Typography>
        </Link>

        <Link to="/contribute">
          <Typography
            sx={{
              textTransform: 'capitalize',
              color: '#333146',
              border: '1px solid #333146',
              borderRadius: '15px',
              paddingX: { xs: '20px', sm: '30px', md: '40px', lg: '72px' },
              paddingY: '10px',
              fontSize: { xs: '18px', lg: '25px' },
              textAlign: 'center',
              transition: '0.3s all ease-in-out',
              '&:hover': {
                background:
                  'linear-gradient(151.93deg, #00859B -22.63%, #BED8E2 257.91%, #8CC2D3 257.91%, #EE3D4C 257.91%)',
                color: '#FFFFFF',
              },
            }}
          >
            Contribute now
          </Typography>
        </Link>
      </Box>
    </>
  )
}

export default ErrorPageNavigateButtons
