import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo/seo'
import { Grid } from '@mui/material'

import ErrorPageBannerText from '../components/404PageComponents/ErrorPageBannerText'
import ErrorPageBannerImage from '../components/404PageComponents/ErrorPageBannerImage'
import ErrorPageNavigateButtons from '../components/404PageComponents/ErrorPageNavigateButtons'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Grid
      container
      maxWidth={'xl'}
      sx={{
        mx: 'auto',
        width: { xs: '90%', xl: '100%' },
        display: 'flex',
        alignItems: 'center',
        paddingY: { xs: '50px', lg: '120px' },
      }}
    >
      <Grid item xs={12} sm={6}>
        <ErrorPageBannerText
          title={'404'}
          subTitle={'error page'}
          description={`Oops, the page you're looking for can't be found!`}
          navigateTo={'/'}
          buttonDescription={'back to homepage'}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ marginY: { xs: '50px', lg: '0px' } }}>
        <ErrorPageBannerImage />
      </Grid>

      <Grid item xs={12}>
        <ErrorPageNavigateButtons />
      </Grid>
    </Grid>
  </Layout>
)

export default NotFoundPage
