import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'gatsby'

const Pagination = ({ currentRefinement, nbPages, refine }) => {
  const handleClick = (event, page) => {
    event.preventDefault()
    if (currentRefinement !== page) {
      refine(page)
      scrollToTop()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' })
  }

  const renderPageButton = (text, page, isDisabled) => (
    <Button
      component={Link}
      to=""
      variant="text"
      sx={{ textDecoration: 'underline' }}
      onClick={event => handleClick(event, page)}
      disabled={isDisabled}
    >
      <Typography
        fontFamily={'Lato, sans-serif'}
        sx={{
          color: '#383D3B',
          fontSize: { xl: '25px' },
          textTransform: 'capitalize',
          paddingRight: '10px',
          borderRight: '1px solid black',
        }}
      >
        {text}
      </Typography>
    </Button>
  )

  const firstPage = 0
  const lastPage = nbPages - 1

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: { xs: '20px', md: '40px' } }}>
      <Typography
        fontFamily={'Lato, sans-serif'}
        sx={{
          color: '#383D3B',
          fontSize: { xl: '25px' },
          paddingRight: '10px',
          borderRight: '1px solid black',
        }}
      >
        1 - <span>{nbPages}</span> of {nbPages}
      </Typography>

      {renderPageButton('First', firstPage, currentRefinement === firstPage)}
      {renderPageButton('< Previous', currentRefinement - 1, currentRefinement === firstPage)}
      {renderPageButton('Next >', currentRefinement + 1, currentRefinement === lastPage)}
      {renderPageButton('Last', lastPage, currentRefinement === lastPage)}
    </Box>
  )
}

export default Pagination
