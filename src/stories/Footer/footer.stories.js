// Footer.stories.js
import React from 'react';
import Footer from './footer';
import { Box } from '@mui/material';


export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%' }}>
        <Story />
      </Box>
    ),
  ],
};

export const Default = () => <Footer />;