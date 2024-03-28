import { Box, Typography, Button } from '@mui/material'
import React from 'react'

const TrainingSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EFF7FC',
        textAlign: 'center',
        borderRadius: '10px',
        padding: { xs: 3.5 },
      }}
    >
      <Typography
        fontFamily={'Lato, sans-serif'}
        sx={{ color: '#0F2D75', fontSize: { xs: 32 }, fontWeight: 700 }}
      >
        Need Cassandra Training?
      </Typography>
      <Typography
        fontFamily={'Poppins, sans-serif'}
        sx={{
          color: '#FFA62B',
          fontSize: { xs: 22 },
          textTransform: 'uppercase',
          fontWeight: 700,
          marginY: 3,
        }}
      >
        WE GOT YOU COVERED.
      </Typography>
      <Typography
        sx={{ fontSize: { xs: 20 }, lineHeight: { md: '24px' }, color: '#333146' }}
        fontFamily={'Lato, sans-serif'}
      >
        Anant US provides online training for Apache Cassandra that covers all the important skills
        you need to know in order to work with this high performance, open source NoSQL database.
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <a href="https://cassandra.link/training-cassandra/" target="_blank">
          <Button
            sx={{
              borderRadius: '20px',
              fontSize: { xs: '14px', sm: '10px', md: '18px', lg: '25px' },
              textTransform: 'capitalize',
              border: '1px solid #000000',
              backgroundColor: 'transparent',
              color: '#333146',
              padding: { md: '5px 74px' },
            }}
            fontFamily="Roboto Condensed, sans-serif"
            fontWeight={400}
            variant="contained"
          >
            Get Started
          </Button>
        </a>
      </Box>
    </Box>
  )
}

export default TrainingSection
