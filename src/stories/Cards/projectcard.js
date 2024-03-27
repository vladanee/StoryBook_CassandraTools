import React from 'react'
import Octicon from 'react-component-octicons'
import Stat from '../Stat/stat'
import DataPoint from '../DataPoint/datapoint'
import { Grid, Typography, Card } from '@mui/material'
import './projectCard.scss'
import { Link } from 'gatsby'

const ListingCard = props => {
  const { id, title, description, repoFields, repoStars, repoIssues, repoForks } = props

  const words = title?.split('-')

  const upperCaseTitle = words
    ?.map(word => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

  return (
    <>
      {title && (
        <a href={`/${id}`}>
          <Grid container className="cardContainer">
            <Grid item className="cardTitle">
              <Typography variant="h2" className="title">
                {upperCaseTitle}
              </Typography>
            </Grid>

            <Grid item className="cardDescription">
              {repoFields &&
                repoFields.map(field => (
                  <DataPoint key={field.name} repoValue={field.name} label={field.label} />
                ))}

              <Typography className="description">{description}</Typography>
            </Grid>

            <Grid item className="statsContainer">
              <Stat
                key="stars"
                Icon={() => <Octicon name="star" zoom="100%" className="iconColor" />}
                label="Repo stars"
                value={repoStars}
              />
              <Stat
                key="issues"
                Icon={() => <Octicon name="issue-opened" zoom="100%" className="iconColor" />}
                label="Open issues"
                value={repoIssues}
              />
              <Stat
                key="forks"
                Icon={() => <Octicon name="repo-forked" zoom="100%" className="iconColor" />}
                label="Repo forks"
                value={repoForks}
              />
            </Grid>
          </Grid>
        </a>
      )}
    </>
  )
}

export default ListingCard
