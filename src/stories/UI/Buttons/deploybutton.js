import React from 'react'
import netlifyLogo from '../../../images/netlify-logo.svg'
import './deployButton.scss'

const DeployButton = ({ repo, className }) => (
  <a className="deployButtonLink" href={`https://app.netlify.com/start/deploy?repository=${repo}`}>
    <img alt="" src={netlifyLogo} /> Deploy to Netlify
  </a>
)

export default DeployButton
