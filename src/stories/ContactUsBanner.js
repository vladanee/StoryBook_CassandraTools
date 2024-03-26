import { Box, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const ContactUsBanner = () => {
  return (
    <Box>
      <Box sx={{ height: { xs: '80px', sm: '100px', lg: '120px', xl: '150px' } }}>
        <img
          src="../../images/contact-banner-img.svg"
          alt="arrow-banner-image"
          style={{ height: '100%', objectFit: 'contain' }}
        />
      </Box>
      <Box sx={{ marginY: '35px' }}>
        <Typography
          fontFamily="Poppins, sans-serif"
          sx={{
            letterSpacing: { xl: '-5px' },
            fontSize: { xs: 35, sm: 45, xl: 80 },
            fontWeight: 700,
            lineHeight: { xs: '50px', xl: '105px' },
            color: '#333146',
          }}
        >
          Drop us a line, we are{' '}
          <span style={{ fontFamily: 'Poppins, sans-serif', color: '#0084CD' }}>friendly</span>!
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '35px' }}>
        <Typography
          fontFamily="Lato, sans-serif"
          sx={{ fontSize: { xs: 24, lg: 32 }, lineHeight: { lg: '42px' }, color: '#4E4D4D' }}
        >
          Whether you have a question, suggestion, or just want to say hi, we'd love to hear from
          you.
        </Typography>
      </Box>
      <Box sx={{ width: { lg: '85%' } }}>
        <Typography
          fontFamily="Lato, sans-serif"
          sx={{
            marginBottom: '20px',
            fontSize: { sm: 18, md: 20 },
            color: '#4E4D4D',
            lineHeight: { lg: '23px' },
          }}
        >
          As Cassandra team, we value your feedback and want to make sure you have the best possible
          experience using our website.
        </Typography>
        <Typography
          fontFamily="Lato, sans-serif"
          sx={{ fontSize: { lg: 20 }, color: '#4E4D4D', lineHeight: { lg: '23px' } }}
        >
          Whether you have a question, comment, or suggestion, we would love to hear from you!
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactUsBanner
