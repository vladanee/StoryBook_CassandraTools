import { Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import ContributeGuidelinesSectionTitle from './SubComponents/ContributeGuidelinesSectionTitle'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
const ContributeGuidelinesSection = () => {
  const shouldDoList = [
    {
      listItem: 'Be related to Apache Cassandra',
    },
    {
      listItem: 'Be open-source and have a compatible license.',
    },
    {
      listItem: 'Be stable, functional, and secure.',
    },
    {
      listItem: 'Have a clear name, description, and documentation.',
    },
    {
      listItem: 'Work with the latest version of Cassandra or specified versions.',
    },
    {
      listItem: 'Be submitted by the original author or with their permission.',
    },
  ]
  const shouldNotDoList = [
    {
      listItem: 'Have known security vulnerabilities or bugs.',
    },
    {
      listItem: 'Have malicious code or violate any intellectual property rights.',
    },
    {
      listItem: 'Endorse any specific company or product.',
    },
  ]
  return (
    <Grid
      container
      maxWidth={'xl'}
      sx={{
        mx: 'auto',
        width: { xs: '90%', xl: 'auto' },
        paddingY: { xs: '40px', lg: '88px' },
      }}
    >
      <ContributeGuidelinesSectionTitle
        title={'1. Submit Your Best: Guidelines for Uploading Your Tool'}
        subTitle={'Please keep in mind that the tool you want to submit should or should not:'}
      />
      <Grid item xs={12}>
        <Grid container columnSpacing={5} sx={{ marginBottom: { md: 5, lg: 0 } }}>
          <Grid item xs={12} sm={6} sx={{ marginBottom: { xs: 5, md: 0 } }}>
            <List
              sx={{
                backgroundColor: '#FEFEFE',
                padding: { xs: '30px 5px', lg: '40px 60px' },
                borderRadius: '10px',
              }}
            >
              {shouldDoList.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Typography sx={{ fontSize: { lg: '18px' } }}>
                      <AiFillCheckCircle style={{ color: 'green', marginRight: '10px' }} />
                      {item.listItem}
                    </Typography>
                  </ListItem>
                )
              })}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginBottom: { xs: 5, md: 0 } }}>
            <List
              sx={{
                backgroundColor: '#FEFEFE',
                height: '100%',
                padding: { xs: '30px 5px', lg: '40px 60px' },
                borderRadius: '10px',
              }}
            >
              {shouldNotDoList.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Typography
                      sx={{ fontSize: { lg: '18px' }, display: 'flex', alignItems: 'center' }}
                    >
                      <AiFillCloseCircle style={{ color: 'red', marginRight: '10px' }} />
                      {item.listItem}
                    </Typography>
                  </ListItem>
                )
              })}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContributeGuidelinesSection
