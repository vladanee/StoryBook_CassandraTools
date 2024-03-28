// CustomSearchBox.stories.js
import React from 'react';
import CustomSearchBox from './CustomSearchBox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/CustomSearchBox',
  component: CustomSearchBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized search box styled specifically for the Cassandra.Tools website. It is designed to work with Algolia search refinements.',
      },
    },
  },
  argTypes: {
    refine: { action: 'refined', description: 'Function to handle search input changes.' },
  },
};

const Template = (args) => <CustomSearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  refine: action('refine'),
};