// ContributeHeroSection.stories.js
import React from 'react';
import { Grid } from '@mui/material';
import ContributeHeroSection from './ContributeHeroSection';

export default {
  title: 'Components/ContributeHeroSection',
  component: ContributeHeroSection,
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <Grid sx={{ maxWidth: 'xl', mx: 'auto' }}>
    <ContributeHeroSection {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};