import React from 'react'
import { Box, Grid } from '@mui/material'
import './projectCard.scss'
import ArticleInfo from './SubCards/ListingCard/ArticleInfo'
import ArticleCardTitle from './SubCards/ListingCard/ArticleCardTitle'
import ArticleDataComponent from './SubCards/ListingCard/ArticleDataComponent'
import ArticleTagsComponent from './SubCards/ListingCard/ArticleTagsComponent'
import NewArticleDataComponent from './SubCards/ListingCard/NewArticleDataComponent'
import ArticleViewMoreButton from './SubCards/ListingCard/ArticleViewMoreButton'
import { Link } from 'gatsby'
const ListingCard = props => {
  const {
    id,
    title,
    repoFields,
    repoStars,
    repoIssues,
    repoForks,
    cardTopics,
    isSmallCard,
    isHomePageCard,
    license,
    language,
  } = props
  const words = title?.split('-')
  const upperCaseTitle = words
    ?.map(word => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {!isSmallCard && (
        <Grid
          container
          sx={{
            border: '1px solid rgba(56, 61, 59, 0.1)',
            height: { sm: '270px', md: 'auto' },
            borderRadius: 1,
            paddingTop: 5,
            paddingBottom: 3.25,
            paddingX: 2.5,
            boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Grid item xs={12}>
            <Link to={`/${id}`}>
              <ArticleTagsComponent cardTagsItems={cardTopics} />
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <ArticleCardTitle title={upperCaseTitle} />
                <ArticleDataComponent repoFields={repoFields} />
                <ArticleInfo
                  id={id}
                  repoStars={repoStars}
                  repoForks={repoForks}
                  repoIssues={repoIssues}
                />
              </Box>
            </Link>
          </Grid>
        </Grid>
      )}
      {isSmallCard && (
        <Grid
          container
          sx={{
            backgroundColor: '#FBFBFB',
            padding: isHomePageCard ? '40px 16px 16px' : '24px',
            border: isHomePageCard && '1px solid rgba(56, 61, 59, 0.1)',
            borderRadius: isHomePageCard && 1,
          }}
        >
          {isHomePageCard && <ArticleTagsComponent cardTagsItems={cardTopics} />}
          <Grid item xs={6}>
            <Grid container>
              <ArticleCardTitle isSmallCard={true} title={upperCaseTitle} />
              <NewArticleDataComponent language={language} license={license} />
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ display: 'flex' }}>
            <Grid container>
              <ArticleInfo
                id={id}
                repoStars={repoStars}
                repoForks={repoForks}
                repoIssues={repoIssues}
                isSmallCard={true}
              />
              <ArticleViewMoreButton id={id} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default ListingCard
