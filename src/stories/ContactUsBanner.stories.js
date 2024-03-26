import React from 'react';
import { Box } from '@mui/material';
import ContactUsBanner from './ContactUsBanner';

export default {
  title: 'Banners/ContactUsBanner',
  component: ContactUsBanner,
};

const Template = (args) => (
  <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
    <ContactUsBanner {...args} />
  </Box>
);

export const Default = Template.bind({});