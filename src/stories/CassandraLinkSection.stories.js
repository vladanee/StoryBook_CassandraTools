import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CassandraLinkSection from './CassandraLinkSection';

export default {
  title: 'Sections/CassandraLinkSection',
  component: CassandraLinkSection,
};

const Template = (args) => <CassandraLinkSection {...args} />;

export const Default = Template.bind({});