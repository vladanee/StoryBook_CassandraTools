import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const NewsLetterBox = ({ useSingleGrid }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    const res = await addToMailchimp(email)
    setEmail('')
  }
  return (
    <Box
      sx={{
        boxShadow: useSingleGrid ? 0 : 3,
        borderRadius: '10px',
        padding: { xs: 3, sm: 0, md: useSingleGrid ? 4 : 0 },
        textAlign: 'center',
        marginTop: { xs: 0, md: 4 },
        backgroundColor: useSingleGrid ? '#F3F3F3' : '#FFFFFF',
        width: { sm: 'auto', xl: useSingleGrid ? 'auto' : '783px' },
        height: { lg: useSingleGrid ? 'auto' : '270px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ paddingX: 3, paddingY: 1.5 }}>
        <Typography
          sx={{
            color: useSingleGrid ? '#333146' : '#0084CD',
            fontSize: { xs: '20px !important', sm: '16px !important', md: '32px !important' },
            lineHeight: 1,
            marginBottom: 3,
          }}
          fontFamily="Poppins, sans-serif"
          fontWeight={700}
        >
          Join Our{' '}
          <span
            style={{
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              color: useSingleGrid && '#FFA62B',
            }}
          >
            Newsletter
          </span>
          !
        </Typography>
        <Typography
          marginTop={1}
          fontSize={{
            xs: '16px !important',
            sm: '12px !important ',
            md: '16px !important',
            lg: '20px !important',
          }}
          fontFamily="Lato, sans-serif"
          fontWeight={400}
          sx={{
            color: '#383D3B',
            width: { xs: '95%', sm: '100%' },
            mx: 'auto',
          }}
        >
          Sign up below to receive email updates and see what's going on with our company.
        </Typography>
        <TextField
          onChange={e => setEmail(e.target.value)}
          value={email || ''}
          size="small"
          sx={{
            marginY: { xs: 1.25, lg: 2 },
            width: { xs: '90%', sm: '60%', md: '80%', lg: '60%' },
            mx: 'auto',
            '& .MuiInputBase-input': {
              padding: { xs: '4px 8px 0px 8px ', lg: '8px 12px ' },
            },
            '& fieldset': {
              borderRadius: '12px',
              boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
            },
          }}
          inputProps={{
            style: {
              backgroundColor: !useSingleGrid && '#EFF7FC',
              borderRadius: '12px',
              color: '#000000',
            },
            placeholder: 'Email address..',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: { xs: 2, sm: 1 },
          }}
        >
          <Button
            id="newsletter-btn"
            sx={{
              borderRadius: '20px',
              padding: { xs: '4px 20px', sm: '4px 30px', md: useSingleGrid && '5px 74px' },
              backgroundColor: 'transparent',
              border: '1px solid #000000 ',
              borderRadius: '15px',
              fontSize: { xs: 14, sm: 8, md: 16, xl: 25 },
              color: '#333146',
              textTransform: useSingleGrid ? 'capitalize' : 'uppercase',
              '&:hover': {
                backgroundColor: '#2e51d1',
                color: '#FFFFFF',
              },
            }}
            onClick={() => handleSubmit()}
            fontFamily="Roboto Condensed, sans-serif"
            fontWeight={useSingleGrid ? 400 : 700}
            variant="contained"
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsLetterBox
