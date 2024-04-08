// ListingCard.stories.js
import React from 'react';
import ListingCard from './ListingCard'; // Adjust the import path as necessary
import './projectCard.scss'; // Adjust the import path for your SCSS file as necessary

export default {
  title: 'Components/ListingCard',
  component: ListingCard,
};

const Template = (args) => <ListingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'example-project',
  description: 'This is a description of the example project.',
  repoFields: [
    { name: 'JavaScript', label: 'Language' },
    { name: 'MIT', label: 'License' }
  ],
  repoStars: 150,
  repoIssues: 10,
  repoForks: 25,
};