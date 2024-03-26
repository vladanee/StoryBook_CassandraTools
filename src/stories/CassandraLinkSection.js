import { Box, Grid, Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const CassandraLinkSection = () => {
  return (
    <Grid
      container
      maxWidth={'xl'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        paddingY: '50px',
        width: { xs: '100%', sm: '95%', xl: '100%' },
      }}
    >
      <Grid item xs={11} sm={7} sx={{ mx: 'auto' }}>
        <Typography
          sx={{
            fontSize: { xs: '30px', sm: '35px', lg: '60px' },
            fontWeight: 700,
            color: '#333146',
            letterSpacing: { xs: '-3px', lg: '-5px' },
            lineHeight: { md: '79px' },
            marginBottom: 1,
          }}
          fontFamily={'Poppins, sans-serif'}
        >
          Check out Cassandra.Link!
        </Typography>
        <Typography
          fontFamily={'Lato, sans-serif'}
          sx={{
            marginBottom: 3.5,
            color: '#0084CD',
            textTransform: 'uppercase',
            fontWeight: 550,
            fontSize: { xs: '13px', sm: '16px', lg: '25px' },
          }}
        >
          The best knowledge base on Apache Cassandra®
        </Typography>
        <Box sx={{ width: { lg: '85%' } }}>
          <Typography
            sx={{ fontSize: { sm: '15px', lg: '20px' }, color: '#333146', lineHeight: '24px' }}
            fontFamily={'Lato, sans-serif'}
          >
            Cassandra.Link, a knowledge base with videos, articles, and open source projects to help
            Apache Cassandra developers, administrators, and architects learn, participate, master,
            and then contribute to the Apache Cassandra community.
          </Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <a
            href="https://cassandra.link/"
            className="clink-button"
            target="_blank"
            style={{ display: 'inline-block' }}
          >
            <Typography
              sx={{
                textTransform: 'capitalize',
                color: '#333146',
                border: '1px solid #000000',
                borderRadius: '15px',
                paddingX: { xs: '54px', sm: '35px' },
                paddingY: { xs: '11px', sm: '5px' },
                fontSize: { sm: '18px', lg: '25px' },
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                ':hover': {
                  transform: 'scale(1.02)',
                  backgroundColor: '#0084CD',
                  color: '#F0EAD6',
                  borderColor: 'transparent',
                },
              }}
            >
              go to website
            </Typography>
          </a>
        </Box>
      </Grid>
      <Grid
        item
        xs={11}
        sm={5}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto' }}
      >
        <Box sx={{ maxWidth: { xs: '100%', sm: '80%' }, mx: 'auto' }}>
  <img src="../../images/trainingAD-img.svg" alt="Cassandra.Link Section" style={{ width: '100%' }} />
</Box>
      </Grid>
    </Grid>
  )
}

export default CassandraLinkSection
