import { Box } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const HeroSectionImage = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        width: { xs: '80%', sm: '50%', lg: '70%', xl: 'auto' },
        height: { xs: '250px', sm: 'auto' },
      }}
    >
      <StaticImage
        style={{ height: '100%', width: '100%' }}
        src="../../../../images/ContributeHeroSectionImg.svg"
        alt="Contribute-Section-Image"
        imgStyle={{ objectFit: 'contain' }}
      />
    </Box>
  )
}

export default HeroSectionImage
