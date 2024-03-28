// Assuming your DetailComponent and its path are correctly defined
import React from 'react';
import DetailComponent from './DetailComponent';

export default {
  title: 'Single Tool Page Components/DetailComponent',
  component: DetailComponent,
  // Add more configuration here as needed
};

// Template for your stories
const Template = (args) => <DetailComponent {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  // Default props for your DetailComponent
};