import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroSectionText = () => {
  return (
    <Box>
      <Typography
        fontFamily={'Poppins, sans-serif'}
        sx={{
          fontWeight: 700,
          fontSize: { xs: '35px', lg: '60px', xl: '70px' },
          color: '#4E4D4D',
          letterSpacing: { xs: '-2px', lg: '-5px' },
        }}
      >
        Build Cassandra with
        <span style={{ fontFamily: 'Poppins,sans-serif', color: '#0084CD' }}>
          {' '}
          your contribution
        </span>
      </Typography>
      <Typography
        fontFamily={'Lato, sans-serif'}
        sx={{
          marginY: { xs: 3, lg: 5 },
          fontSize: { xs: '22px', sm: '24px', lg: '30px' },
          color: '#4E4D4D',
        }}
      >
        Help us build a better database for the future!
      </Typography>
      <Box sx={{ width: '95%' }}>
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{
            color: '#4E4D4D',
            fontSize: { xs: '16px', sm: '18px', lg: '20px' },
            lineHeight: { lg: '23px' },
          }}
        >
          Your contributions to the Cassandra community can have a huge impact on the development of
          the database.{' '}
        </Typography>
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{
            color: '#4E4D4D',
            marginY: '20px',
            lineHeight: { lg: '23px' },
            fontSize: { lg: '20px' },
          }}
        >
          Whether it's by sharing your expertise, submitting new tools, or code, your contributions
          help to make Cassandra a better and more powerful database for everyone.
        </Typography>
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{ color: '#4E4D4D', lineHeight: { lg: '23px' }, fontSize: { lg: '20px' } }}
        >
          So join the community today and help us build a better Cassandra together.
        </Typography>
      </Box>
    </Box>
  )
}

export default HeroSectionText
