import { MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { filterInput } from './filterStyle.js'

const CustomFilter = ({ items, currentRefinement, refine, clearedFilters }) => {
  const [selectValue, setSelectValue] = useState('')
  const [reset, setReset] = useState(clearedFilters)

  const onSelectChange = e => {
    refine(e.target.value)
    setSelectValue(e.target.value)
    setReset(false)
  }

  useEffect(() => {
    setReset(true)
  }, [clearedFilters])

  return (
    <Select sx={filterInput} value={reset ? '' : selectValue} onChange={onSelectChange}>
      {currentRefinement && (
        <MenuItem disabled value=" ">
          <em>{currentRefinement === 'repos_data' ? 'Stars (desc)' : 'Stars (asc)'}</em>
        </MenuItem>
      )}
      {items.map(item => (
        <MenuItem key={item.label} value={item.value ? item.value : ''}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CustomFilter
