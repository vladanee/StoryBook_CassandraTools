import { Grid } from '@mui/material'
import React from 'react'
import DataValueComponent from '../DataValue'
const ArticleDataComponent = ({ repoFields }) => {
  return (
    <Grid item xs={12} sx={{ marginBottom: 4 }}>
      {repoFields &&
        repoFields.map(field => (
          <DataValueComponent key={field.name} repoValue={field.name} label={field.label} />
        ))}
    </Grid>
  )
}

export default ArticleDataComponent
