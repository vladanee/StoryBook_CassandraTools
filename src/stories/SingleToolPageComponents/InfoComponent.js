import { Typography, Box } from '@mui/material'
import React from 'react'

const InfoComponent = ({ data }) => {
  const licenseName = data.singleReposData.edges[0].node.license?.name || 'No License Provided'
  const articleLanguage = data.singleReposData.edges[0].node?.language || 'No Language Provided'

  return (
    <Box sx={{ paddingBottom: 5, marginY: 5 }}>
      <Typography fontFamily={'Lato, sans-serif'} sx={{ fontSize: { lg: 32 }, fontWeight: 700 }}>
        License: <span style={{ fontWeight: 400 }}>{licenseName}</span>
      </Typography>
      <Typography fontFamily={'Lato, sans-serif'} sx={{ fontSize: { lg: 32 }, fontWeight: 700 }}>
        Language: <span style={{ fontWeight: 400 }}>{articleLanguage}</span>
      </Typography>
    </Box>
  )
}

export default InfoComponent
