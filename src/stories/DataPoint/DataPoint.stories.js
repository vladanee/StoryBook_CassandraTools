// DataPoint.stories.js
import React from 'react';
import { Grid } from '@mui/material';
import DataPoint from '../DataPoint/datapoint';

export default {
  title: 'Components/DataPoint',
  component: DataPoint,
  argTypes: {
    label: { control: 'text' },
    repoValue: { control: 'text' },
  },
};

const Template = (args) => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <DataPoint {...args} />
    </Grid>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Stars',
  repoValue: '1024',
};

export const WithArrayValue = Template.bind({});
WithArrayValue.args = {
  label: 'Contributors',
  repoValue: ['Alice', 'Bob', 'Charlie'],
};