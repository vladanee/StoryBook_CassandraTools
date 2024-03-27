import React from 'react'
import { Box, Typography } from '@mui/material'
import Stat from '../../../Stat/stat'
import { AiFillStar, AiOutlineFork } from 'react-icons/ai'
import { FcInfo } from 'react-icons/fc'
import { Link } from 'gatsby'

const ArticleInfo = ({ repoStars, repoForks, repoIssues, id, isSmallCard }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
      }}
    >
      <Stat
        key="stars"
        Icon={() => <AiFillStar style={{ color: '#0084CD' }} />}
        label="Repo stars"
        isSmallCard={isSmallCard}
        value={repoStars ? repoStars : 'N/A'}
      />
      <Stat
        key="issues"
        Icon={() => <FcInfo />}
        label="Open issues"
        isSmallCard={isSmallCard}
        value={repoIssues ? repoIssues : 'N/A'}
      />
      <Stat
        key="forks"
        Icon={() => <AiOutlineFork />}
        label="Repo forks"
        isSmallCard={isSmallCard}
        value={repoForks ? repoForks : 'N/A'}
      />
      {!isSmallCard && (
        <Box sx={{ marginLeft: 'auto' }}>
          <Typography
            sx={{
              color: '#535A57',
              textDecoration: 'underline',
              fontSize: '20px',
              padding: '3px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#0084CD',
                color: 'white',
                textDecoration: 'none',
              },
            }}
          >
            View More
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ArticleInfo
