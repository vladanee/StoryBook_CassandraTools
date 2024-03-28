// InfoComponent.stories.js
import React from 'react';
import InfoComponent from './InfoComponent';

export default {
  title: 'Components/InfoComponent',
  component: InfoComponent,
};

const mockData = {
  singleReposData: {
    edges: [
      {
        node: {
          license: { name: 'MIT' },
          language: 'JavaScript',
        },
      },
    ],
  },
};

export const Default = {
  args: {
    data: mockData,
  },
};