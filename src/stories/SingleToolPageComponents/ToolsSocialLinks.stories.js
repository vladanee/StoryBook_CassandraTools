// ToolsSocialLinks.stories.js
import React from 'react';
import ToolsSocialLinks from './ToolsSocialLinks';

export default {
  title: 'Components/ToolsSocialLinks',
  component: ToolsSocialLinks,
};

const mockData = {
  singleReposData: {
    edges: [
      {
        node: {
          documentation_url: 'https://example.com/docs',
          svn_url: 'https://github.com/example/repo',
          homepage: 'https://example.com',
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