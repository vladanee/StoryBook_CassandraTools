import React from 'react'
import { Box, Typography } from '@mui/material'
import './stat.scss'

const Stat = ({ Icon, value, label, isSmallCard }) => {
  const disabled = value === 0

  return (
    <Box
      sx={{
        marginRight: !isSmallCard ? 2 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      className={`statContainer ${disabled ? 'disabled' : ''}`}
    >
      <Typography
        sx={{
          fontSize: { md: '16px', xl: '18px' },
          display: 'flex',
          justifyContent: 'space-between',
        }}
        title={label}
      >
        <span style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>
          <Icon />
        </span>
        {disabled ? (
          <span>N/A</span>
        ) : (
          <span>
            <strong>{value}</strong>
          </span>
        )}
      </Typography>
    </Box>
  )
}

export default Stat
