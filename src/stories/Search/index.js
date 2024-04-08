import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { Grid, Box, Typography, Container } from '@mui/material'
import { InstantSearch, SortBy, ClearRefinements } from 'react-instantsearch-hooks-web'
import CustomHits from './CustomHits'
import CustomPagination from './CustomPagination'
import CustomSearch from './CustomSearch'
import LanguageFilter from './LanguageFilter'
import LicenseFilter from './LicenseFilter'
import TemplateFilter from './TemplateFilter'
import './style/clearButton.scss'
import './style/sortBy.scss'
import CustomSortBy from './CustomSortBy'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

export default function Search({ promoCardText }) {
  const [clearedFilters, setClearedFilters] = useState(false)
  const clear = () => {
    if (!clearedFilters) {
      setClearedFilters(true)
    } else {
      setClearedFilters(false)
    }
  }

  return (
    <InstantSearch searchClient={searchClient} indexName="repos_data">
      <CustomSearch />
      <Container maxWidth={'xl'}>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '100px',
            marginTop: '20px',
            mx: 'auto',
          }}
        >
          <Grid item xs={11} sm={6} md={3} sx={{ paddingRight: { xs: 2, sm: 0 } }}>
            <Typography>Language</Typography>
            <LanguageFilter attribute="language" clearedFilters={clearedFilters} limit={40} />
          </Grid>
          <Grid item xs={11} sm={6} md={3} sx={{ paddingRight: { xs: 2, sm: 0 } }}>
            <Typography>Template</Typography>
            <TemplateFilter attribute="topics" clearedFilters={clearedFilters} limit={40} />
          </Grid>
          <Grid item xs={11} sm={6} md={3} sx={{ paddingRight: { xs: 2, sm: 0 } }}>
            <Typography>License</Typography>
            <LicenseFilter attribute="license.name" clearedFilters={clearedFilters} limit={40} />
          </Grid>
          <Grid item xs={11} sm={6} md={3} sx={{ paddingRight: { xs: 2, sm: 0 } }}>
            <Typography>Stars</Typography>
            {/* <SortBy
              items={[
                { label: 'Stars (desc)', value: 'repos_data' },
                { label: 'Stars (asc)', value: 'stars_asc' },
              ]}
              classNames={{
                root: 'MyCustomSortBy',
                select: 'MyCustomSortBySelect MyCustomSortBySelect--subclass',
              }}
            /> */}
            <CustomSortBy
              items={[
                { label: 'Stars (desc)', value: 'repos_data' },
                { label: 'Stars (asc)', value: 'stars_asc' },
              ]}
            />
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} item md={2}>
            <ClearRefinements
              onClickCapture={clear}
              translations={{
                resetButtonText: 'Clear all',
              }}
              classNames={{
                root: 'MyCustomClearRefinements',
                button: 'MyCustomClearRefinementsButton MyCustomClearRefinementsButton--subclass',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <CustomHits promoText={promoCardText} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CustomPagination />
      </Box>
    </InstantSearch>
  )
}
