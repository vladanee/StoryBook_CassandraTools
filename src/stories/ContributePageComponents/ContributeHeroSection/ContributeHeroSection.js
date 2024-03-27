import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import HeroSectionText from './SubComponents/HeroSectionText'
import HeroSectionImage from './SubComponents/HeroSectionImage'

const ContributeHeroSection = () => {
  return (
    <Grid
      container
      maxWidth={'xl'}
      sx={{
        mx: 'auto',
        width: { xs: '90%', xl: 'auto' },
        paddingY: { xs: 5, lg: 15 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} lg={6}>
        <HeroSectionText />
      </Grid>
      <Grid item xs={12} lg={6} sx={{ marginTop: { xs: 4, md: 6, lg: 0 } }}>
        <HeroSectionImage />
      </Grid>
    </Grid>
  )
}

export default ContributeHeroSection
