import { Box } from '@mui/material'
import React from 'react'
import { EntypoHome, EntypoGithub } from 'react-entypo'
const DetailComponent = ({ data }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {<EntypoHome className="entypoIcon" />}
        <a
          target="_blank"
          href={data.singleReposData?.edges[0]?.node?.homepage}
          style={{ textDecoration: 'underline', marginLeft: '15px' }}
          className="detailLink"
        >
          Source page
        </a>
      </Box>

      <Box sx={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
        {data.singleReposData?.edges[0]?.node?.svn_url && <EntypoGithub className="entypoIcon" />}
        <a
          target="_blank"
          href={data.singleReposData?.edges[0]?.node?.svn_url}
          style={{ textDecoration: 'underline', marginLeft: '15px' }}
          className="detailLink"
        >
          {data.singleReposData?.edges[0]?.node?.name
            ? data.singleReposData?.edges[0]?.node?.name
            : 'No name'}{' '}
          ({data.singleReposData?.edges[0]?.node?.stargazers_count})
        </a>
      </Box>
    </Box>
  )
}

export default DetailComponent
