import { Box } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import img from '../../images/ErrorBannerImg.svg'
import React from 'react'
const ErrorPageBannerImage = () => {
  return (
    <Box>
      <StaticImage src={'../../images/ErrorBannerImg.svg'} alt="ErrorBannerImg" />
    </Box>
  )
}

export default ErrorPageBannerImage
