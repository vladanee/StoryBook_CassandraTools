import { Box, Button } from '@mui/material'
import React from 'react'
import { VscFiles } from 'react-icons/vsc'
import { FaGithubAlt } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
const ToolsSocialLinks = ({ data }) => {
  const documentationLink = data.singleReposData.edges[0].node.documentation_url
  const GitHubHomepageLink = data.singleReposData?.edges[0]?.node?.svn_url
  const WebsiteUrl = data.singleReposData?.edges[0]?.node?.homepage
  return (
    <Box>
      {documentationLink !== null && (
        <Box sx={{ marginBottom: 4 }}>
          <a href={documentationLink} target="_blank">
            <Button
              sx={{
                borderRadius: '20px',
                fontSize: { xs: '14px', sm: '10px', md: '18px', lg: '25px' },
                textTransform: 'capitalize',
                border: '1px solid #000000',
                backgroundColor: 'transparent',
                color: '#333146',
                padding: { md: '15px 74px' },
                transition: 'background-color 0.3s ease-in',
                '&:hover': {
                  backgroundColor: '#0084CD',
                  color: '#FFFFFF',
                },
              }}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
              variant="contained"
            >
              <VscFiles style={{ marginRight: '10px' }} />
              Documentation
            </Button>
          </a>
        </Box>
      )}
      {GitHubHomepageLink !== null && (
        <Box sx={{ marginBottom: 4 }}>
          <a href={GitHubHomepageLink} target="_blank">
            <Button
              sx={{
                borderRadius: '20px',
                fontSize: { xs: '14px', sm: '10px', md: '18px', lg: '25px' },
                textTransform: 'capitalize',
                border: '1px solid #000000',
                backgroundColor: 'transparent',
                color: '#333146',
                padding: { md: '15px 74px' },
                transition: 'background-color 0.3s ease-in',
                '&:hover': {
                  backgroundColor: '#0084CD',
                  color: '#FFFFFF',
                },
              }}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
              variant="contained"
            >
              <FaGithubAlt style={{ marginRight: '10px' }} />
              GitHub page
            </Button>
          </a>
        </Box>
      )}
      {WebsiteUrl !== null && (
        <Box>
          <a href={WebsiteUrl} target="_blank">
            <Button
              sx={{
                borderRadius: '20px',
                fontSize: { xs: '14px', sm: '10px', md: '18px', lg: '25px' },
                textTransform: 'capitalize',
                border: '1px solid #000000',
                backgroundColor: 'transparent',
                color: '#333146',
                padding: { md: '15px 74px' },
                transition: 'background-color 0.3s ease-in',
                '&:hover': {
                  backgroundColor: '#0084CD',
                  color: '#FFFFFF',
                },
              }}
              fontFamily="Roboto Condensed, sans-serif"
              fontWeight={400}
              variant="contained"
            >
              <BsBoxArrowUpRight style={{ marginRight: '10px' }} />
              Visit Website
            </Button>
          </a>
        </Box>
      )}
    </Box>
  )
}

export default ToolsSocialLinks
