// ContactForm.stories.js
import React from 'react';
import { Box } from '@mui/material';
import ContactForm from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'centered',
  },
};

const Template = (args) => (
  <Box sx={{ maxWidth: 500, margin: 'auto' }}>
    <ContactForm {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};

const WithCustomStylesTemplate = (args) => (
  <Box sx={{ maxWidth: 700, margin: 'auto', backgroundColor: '#f0f0f0', padding: 4, borderRadius: 2 }}>
    <ContactForm {...args} />
  </Box>
);

export const WithCustomStyles = WithCustomStylesTemplate.bind({});
WithCustomStyles.args = {};
WithCustomStyles.parameters = {
  // Specific parameters for this story variant, if needed
};