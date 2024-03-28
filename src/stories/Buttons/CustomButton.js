import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './customButton.scss'
import { Grid } from '@mui/material'

const CustomButton = ({ buttonClass, buttonText, buttonLink, target }) => {
  return (
    <Grid className="linkButtonContainer">
      <a href={buttonLink} target={target} className={`linkButton ${buttonClass}`}>
        {buttonText}
        <HiOutlineArrowNarrowRight />
      </a>
    </Grid>
  )
}

export default CustomButton
