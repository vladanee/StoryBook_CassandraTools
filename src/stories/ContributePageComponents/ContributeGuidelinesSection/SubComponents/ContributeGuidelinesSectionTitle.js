import { Grid, Typography } from '@mui/material'
import React from 'react'

const ContributeGuidelinesSectionTitle = ({ title, subTitle }) => {
  return (
    <Grid item xs={12}>
      <Typography
        fontFamily={'Poppins,sans-serif'}
        sx={{ fontSize: { xs: '24px', lg: '32px' }, fontWeight: 700, color: '#333146' }}
      >
        {title}
      </Typography>
      <Typography
        fontFamily={'Lato,sans-serif'}
        sx={{ marginY: 3, fontSize: { xs: '24px', lg: '32px' }, color: '#4E4D4D' }}
      >
        {subTitle}
      </Typography>
    </Grid>
  )
}

export default ContributeGuidelinesSectionTitle
