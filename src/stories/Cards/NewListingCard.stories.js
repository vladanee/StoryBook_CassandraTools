// NewListingCard.stories.js
import React from 'react';
import NewListingCard from './ListingCard'; // Adjust the import path as necessary
import './projectCard.scss'; // Adjust the import path for your SCSS file as necessary

export default {
  title: 'Components/NewListingCard',
  component: NewListingCard,
};

const Template = (args) => <NewListingCard {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  id: '2',
  title: 'another-example-project',
  cardTopics: ['React', 'Node.js'],
  isSmallCard: false,
  isHomePageCard: true,
  license: 'Apache 2.0',
  language: 'TypeScript',
  repoStars: 200,
  repoIssues: 15,
  repoForks: 30,
};