import { Box, Button, Typography } from '@mui/material'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
const QuestionaireTextField = () => {
  return (
    <Box>
      <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
        <StaticImage
          src={'../../../../images/SubmissionFormBannerImg.png'}
          alt="SubmissionFormImage"
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '36px', lg: '60px' },
          color: '#333146',
          marginY: { xs: 2.5, lg: 3.5 },
        }}
        fontFamily={'Poppins, sans-serif'}
      >
        Have a Question?
      </Typography>
      <Typography
        sx={{
          color: '#4E4D4D',
          fontSize: { xs: '18px', lg: '32px' },
          width: { lg: '80%' },
          lineHeight: { lg: '42px' },
        }}
        fontFamily={'Lato, sans-serif'}
      >
        If you have any questions/issues regarding your tool submission, do not hesitate to reach
        out and contact us!
      </Typography>
      <Box sx={{ marginTop: 3, textAlign: { xs: 'center', sm: 'left' } }}>
        <Link to="/contact">
          <Button
            sx={{
              color: '#333146',
              textTransform: 'capitalize',
              border: '1px solid #333146',
              padding: { xs: '10px 40px', lg: '10px 74px' },
              borderRadius: '15px',
              transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography sx={{ fontSize: { lg: '25px' } }} fontFamily={'Nunito Sans, sans-serif'}>
              Contact Us
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default QuestionaireTextField
