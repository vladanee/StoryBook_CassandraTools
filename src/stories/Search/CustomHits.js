import React from 'react'
import { Container, Grid, Box } from '@mui/material'
import { useHits } from 'react-instantsearch-hooks-web'
import ListingCard from '../Cards/ListingCard'

const CustomHits = ({ props, promoText }) => {
  const { hits } = useHits(props)

  return (
    <Container maxWidth={'xl'}>
      <Grid container sx={{ display: { xs: 'none', md: 'flex' } }} spacing={{ xs: 3, sm: 6 }}>
        {hits.map((hit, i) => {
          return (
            <Grid item xs={11} sx={{ mx: { xs: 'auto', sm: 0 } }} sm={6} key={i}>
              <ListingCard
                title={hit?.name}
                id={hit?.full_name}
                repoFields={[
                  {
                    name: hit?.license?.name ? hit?.license?.name : 'No license',
                    label: 'License',
                  },
                  {
                    name: hit?.language ? hit?.language : 'No language',
                    label: 'Language',
                  },
                ]}
                license={hit?.license?.name}
                language={hit?.language}
                description={hit?.description}
                repoStars={hit?.stargazers_count}
                repoIssues={hit?.open_issues_count}
                repoForks={hit?.forks_count}
                cardTopics={hit.topics}
              />
            </Grid>
          )
        })}
      </Grid>
      <Grid container sx={{ display: { xs: 'flex', md: 'none' } }} spacing={{ xs: 3, sm: 6 }}>
        {hits.map((hit, i) => {
          return (
            <Grid item xs={11} sx={{ mx: { xs: 'auto', sm: 0 } }} sm={6} key={i}>
              <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
                <ListingCard
                  title={hit?.name}
                  id={hit?.full_name}
                  repoFields={[
                    {
                      name: hit?.license?.name ? hit?.license?.name : 'No license',
                      label: 'License',
                    },
                    {
                      name: hit?.language ? hit?.language : 'No language',
                      label: 'Language',
                    },
                  ]}
                  license={hit?.license?.name}
                  language={hit?.language}
                  description={hit?.description}
                  repoStars={hit?.stargazers_count}
                  repoIssues={hit?.open_issues_count}
                  repoForks={hit?.forks_count}
                  cardTopics={hit.topics}
                  isSmallCard={true}
                  isHomePageCard={true}
                />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default CustomHits
