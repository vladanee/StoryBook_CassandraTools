import { Box, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'

const FooterProperties = () => {
  return (
    <>
      <Typography
        sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        className="footerSectionTitle"
        variant="h4"
      >
        Properties
      </Typography>
      <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
        <a href="https://blog.anant.us/" target="_blank">
          <Typography
            sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' } }}
            fontFamily={'Lato, sans-serif'}
            gutterBottom
          >
            Blog
          </Typography>
        </a>
        <Link to="/">
          <Typography
            sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' } }}
            fontFamily={'Lato, sans-serif'}
            gutterBottom
          >
            Cassandra.Link
          </Typography>
        </Link>
        <Link to="/cassandra.toolkit">
          <Typography
            sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' } }}
            fontFamily={'Lato, sans-serif'}
            gutterBottom
          >
            Cassandra.Tools
          </Typography>
        </Link>
        <a href="https://playbook.anant.us/" target="_blank">
          <Typography
            sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' } }}
            fontFamily={'Lato, sans-serif'}
            gutterBottom
          >
            Anant Playbook
          </Typography>
        </a>
        <Link to="/awesome">
          <Typography
            sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' } }}
            fontFamily={'Lato, sans-serif'}
          >
            Awesome Cassandra
          </Typography>
        </Link>
      </Box>
    </>
  )
}

export default FooterProperties
