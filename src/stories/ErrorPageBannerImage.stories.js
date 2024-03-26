import React from 'react';
import ErrorPageBannerImage from './ErrorPageBannerImage';

// Here you define the metadata for your component
export default {
  title: 'Components/ErrorPageBannerImage',
  component: ErrorPageBannerImage,
};

// Template for your component's story
const Template = (args) => <ErrorPageBannerImage {...args} />;

// Default view of your component
export const Default = Template.bind({});