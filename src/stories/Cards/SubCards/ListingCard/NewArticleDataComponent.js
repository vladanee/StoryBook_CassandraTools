import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
const NewArticleDataComponent = ({ license, language }) => {
  return (
    <Grid item xs={12}>
      <Box>
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{
            color: '#535A57',
            fontSize: { xs: '12px', lg: '13px' },
            textTransform: 'capitalize',
          }}
        >
          License : <span>{license ? license : 'No License'}</span>
        </Typography>
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{
            color: '#535A57',
            fontSize: { xs: '12px', lg: '13px' },
            textTransform: 'capitalize',
          }}
        >
          Language : <span>{language ? language : 'No Language'}</span>
        </Typography>
      </Box>
    </Grid>
  )
}

export default NewArticleDataComponent
