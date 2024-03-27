import React from 'react'
import { Box, Typography } from '@mui/material'

const DataValueComponent = ({ label, repoValue }) => (
  <>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        fontFamily={'Poppins, sans-serif'}
        sx={{ color: '#535A57', fontSize: { lg: '25px' } }}
      >
        {label && <span style={{ marginRight: '8px', fontWeight: 550 }}>{label}:</span>}
        {repoValue && <span>{Array.isArray(repoValue) ? repoValue.join(', ') : repoValue}</span>}
      </Typography>
    </Box>
  </>
)

export default DataValueComponent
