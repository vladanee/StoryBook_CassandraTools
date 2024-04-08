import React from 'react'
import { Grid, Box } from '@mui/material'
import './footer.scss'
import NewsLetterBox from '../NewsLetter/NewsLetterBox'
import ContactInfo from './SubContent/ContactInfo'
import FooterProperties from './SubContent/FooterProperties'
import FooterSocialIcons from './SubContent/FooterSocialIcons'
import FooterLogoAndTrademark from './SubContent/FooterLogoAndTrademark'

const Footer = () => {
  return (
    <Box className="footerContainer">
      <Grid
        maxWidth={'xl'}
        sx={{ margin: { xl: '0 auto' } }}
        container
        columnSpacing={{ xs: 0, sm: 4 }}
        rowSpacing={4}
        className="footer"
      >
        <Grid item xs={12} sm={6}>
          <Grid container columnSpacing={{ xs: 0, sm: 4 }} rowSpacing={4}>
            <ContactInfo />
            <Grid item xs={12} sm={6} className="anantInfo">
              <FooterProperties />
            </Grid>
            <Grid item xs={12} sm={6} className="socialMediaContainer">
              <FooterSocialIcons />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} md={11} xl={12} sx={{ marginBottom: 10, mx: 'auto' }}>
              <NewsLetterBox />
            </Grid>
            <Grid
              item
              xs={12}
              md={11}
              xl={12}
              sx={{ display: 'flex', alignItems: 'center', mx: 'auto' }}
            >
              <FooterLogoAndTrademark />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
