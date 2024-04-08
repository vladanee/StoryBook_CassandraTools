import { InputBase } from '@mui/material'
import React from 'react'
import { input } from './customSearchBoxStyle'

const CustomSearchBox = ({ refine }) => {
  return (
    <InputBase
      id="algolia_search"
      type="search"
      placeholder="Search Cassandra.Tools"
      onChange={e => refine(e.currentTarget.value)}
      sx={input}
    />
  )
}

export default CustomSearchBox
