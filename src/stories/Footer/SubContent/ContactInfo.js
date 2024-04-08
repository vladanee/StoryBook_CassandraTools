import { Grid, Typography } from '@mui/material'
import React from 'react'
import { GoLocation } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
const ContactInfo = () => {
  return (
    <>
      <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography className="footerSectionTitle" variant="h4">
          Contact Info
        </Typography>

        <Typography
          gutterBottom
          sx={{
            fontSize: { xs: '18px', sm: '16px', lg: '22px' },
            width: { md: '70%' },
          }}
          fontFamily={'Lato, sans-serif'}
        >
          <GoLocation className="iconsInfo" /> 3 Washington Circle NW Suite 301 - Washington, D.C.
          20037
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: { xs: 'center', sm: 'left' },
        }}
        item
        xs={12}
        sm={6}
      >
        <Typography
          sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' }, marginTop: { sm: 1.5, md: 0 } }}
          gutterBottom
          fontFamily={'Lato, sans-serif'}
        >
          @ <a href="mailto:support@anant.us">support@anant.us</a>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '18px', sm: '16px', lg: '22px' } }}
          fontFamily={'Lato, sans-serif'}
        >
          <FiPhone className="iconsInfo" />
          <a href="tel:(855)262-6526"> (855) 262-6526</a>
        </Typography>
      </Grid>
    </>
  )
}

export default ContactInfo
