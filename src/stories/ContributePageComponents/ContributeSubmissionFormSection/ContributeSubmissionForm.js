import { Box, Grid } from '@mui/material'
import React from 'react'
import BannerTitle from './SubComponents/BannerTitle'
import QuestionaireTextField from './SubComponents/QuestionaireTextField'
import SubmissionForm from './SubComponents/SubmissionForm'
const ContributeSubmissionForm = () => {
  return (
    <Grid
      container
      maxWidth={'xl'}
      sx={{
        mx: 'auto',
        width: { xs: '90%', xl: '100%' },
        paddingY: { xs: '40px', lg: '80px' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sx={{ marginBottom: { md: 7 } }}>
        <BannerTitle
          title={'2. Submission Form'}
          subTitle={'Please fill out this form below if you are interested in any contribution!'}
        />
      </Grid>
      <Grid item xs={12} lg={6} sx={{ marginY: { xs: 3, lg: 0 } }}>
        <SubmissionForm />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box sx={{ width: { sm: '95%', md: '90%' }, marginLeft: 'auto' }}>
          <QuestionaireTextField />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ContributeSubmissionForm
