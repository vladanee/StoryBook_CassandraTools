import React from 'react';
import { Box } from '@mui/material';
import CassandraLinkSection from './CassandraLinkSection';

export default {
  title: 'Sections/CassandraLinkSection',
  component: CassandraLinkSection,
  decorators: [
    (Story) => (
      <Box sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333146' },
      ],
    },
  },
};

const Template = (args) => <CassandraLinkSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Define default args if your component takes props
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  // Define args for dark mode if applicable
};
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};