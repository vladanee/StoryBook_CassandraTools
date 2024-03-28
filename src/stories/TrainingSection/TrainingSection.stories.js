// TrainingSection.stories.js
import React from 'react';
import TrainingSection from './TrainingSection';

export default {
  title: 'Components/TrainingSection',
  component: TrainingSection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The TrainingSection component displays a promotional section for Cassandra training services, featuring a call-to-action button that directs users to a training page.',
      },
    },
  },
};

const Template = () => <TrainingSection />;

export const Default = Template.bind({});