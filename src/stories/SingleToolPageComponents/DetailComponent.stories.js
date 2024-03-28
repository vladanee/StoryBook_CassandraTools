// DetailComponent.stories.js
import React from 'react';
import DetailComponent from './DetailComponent';

const Template = (args) => <DetailComponent {...args} />;

export default {
  title: 'Components/DetailComponent',
  component: DetailComponent,
};

export const Default = Template.bind({});
Default.args = {
  data: {
    singleReposData: {
      edges: [
        {
          node: {
            homepage: 'https://example.com',
            svn_url: 'https://github.com/example',
            name: 'Example Project',
            stargazers_count: 200,
          },
        },
      ],
    },
  },
};