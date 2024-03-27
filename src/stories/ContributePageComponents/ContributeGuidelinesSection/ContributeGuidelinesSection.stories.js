// ContributeGuidelinesSection.stories.js
import React from 'react';
import { Grid } from '@mui/material';
import ContributeGuidelinesSection from './ContributeGuidelinesSection';

export default {
  title: 'Components/ContributeGuidelinesSection',
  component: ContributeGuidelinesSection,
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <Grid sx={{ maxWidth: 'xl', mx: 'auto' }}>
    <ContributeGuidelinesSection {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};