import { Box } from '@mui/material'
import React from 'react'
const SubmissionForm = () => {
  return (
    <Box
      sx={{
        width: '90%',
        mx: 'auto',
        height: '749px',
        position: 'relative',
      }}
    >
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrWZAGNx1gqrXMi4?backgroundColor=blue"
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid #333146',
          borderRadius: '10px',
        }}
      ></iframe>
    </Box>
  )
}

export default SubmissionForm
