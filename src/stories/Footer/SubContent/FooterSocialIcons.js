import { Box, Typography } from '@mui/material'
import React from 'react'
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa'


const FooterSocialIcons = () => {
  return (
    <>
      <Box>
        <Typography className="footerSectionTitle" variant="h4">
          Follow Us
        </Typography>
      </Box>
      <Box className="social-icons-container">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
          gutterBottom
          fontFamily={'Lato, sans-serif'}
        >
          <AiFillGithub className="githubIcon" />
          <a href="https://github.com/Anant" target="_blank">
            GitHub
          </a>
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
          gutterBottom
          fontFamily={'Lato, sans-serif'}
        >
          <AiFillYoutube className="youtubeIcon" />
          <a href="https://www.youtube.com/c/AnantCorp" target="_blank">
            Youtube
          </a>
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
          gutterBottom
          fontFamily={'Lato, sans-serif'}
        >
          <FaTwitter className="twitterIcon" />
          <a href="https://twitter.com/anantcorp" target="_blank">
            Twitter
          </a>
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
          gutterBottom
          fontFamily={'Lato, sans-serif'}
        >
          <FaLinkedinIn className="linkedinIcon" />
          <a href="https://www.linkedin.com/company/anant/" target="_blank">
            LinkedIn
          </a>
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
          gutterBottom
          fontFamily={'Lato, sans-serif'}
        >
          <FaFacebook className="facebokIcon" />
          <a href="https://www.facebook.com/AnantCorp/" target="_blank">
            Facebook
          </a>
        </Typography>
      </Box>
    </>
  )
}

export default FooterSocialIcons
