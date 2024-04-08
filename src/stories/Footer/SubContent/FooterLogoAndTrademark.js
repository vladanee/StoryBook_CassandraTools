import { Box, Typography } from '@mui/material'
import React from 'react'
import FooterLogo from '../.././images/anant-logo-footer.svg'
const FooterLogoAndTrademark = () => {
  return (
    <>
      <a href="https://anant.us" target="_blank">
        <img src={FooterLogo} style={{ objectFit: 'contain' }} alt="anant.us" />
      </a>
      <Box sx={{ marginLeft: '24px' }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: '14px !important', md: '20px !important' },
          }}
          gutterBottom
        >
          © 2022 Anant Corporation,All Rights Reserved.
        </Typography>
        <Typography sx={{ fontSize: { sm: '10px !important', md: '14px !important' } }}>
          All logos, trademarks and registered trademarks are the property of their respective
          owners.
        </Typography>
      </Box>
    </>
  )
}

export default FooterLogoAndTrademark
