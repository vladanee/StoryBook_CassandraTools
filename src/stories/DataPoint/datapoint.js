import React from 'react'
import { Grid, Typography } from '@mui/material'
import './dataPoint.scss'

const DataPoint = ({ label, repoValue }) => (
  <>
    <Grid className="dataPointContainer">
      {label && (
        <Typography variant="h6" className="dataPointTitle">
          {label}:
        </Typography>
      )}

      {repoValue && (
        <Typography className="type">
          {Array.isArray(repoValue) ? repoValue.join(', ') : repoValue}
        </Typography>
      )}
    </Grid>
  </>
)

export default DataPoint
