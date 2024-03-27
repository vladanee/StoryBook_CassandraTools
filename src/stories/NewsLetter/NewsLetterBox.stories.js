// NewsLetterBox.stories.js
import React from 'react';
import { Box } from '@mui/material';
import NewsLetterBox from '../NewsLetter/NewsLetterBox';

export default {
  title: 'Components/NewsLetterBox',
  component: NewsLetterBox,
  argTypes: {
    useSingleGrid: {
      control: 'boolean',
      description: 'Toggle for different layout styles',
    },
  },
};

const Template = (args) => (
  <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
    <NewsLetterBox {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  useSingleGrid: false,
};

export const SingleGridStyle = Template.bind({});
SingleGridStyle.args = {
  useSingleGrid: true,
};