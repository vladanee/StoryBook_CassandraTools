// CustomFilter.stories.js
import React from 'react';
import CustomFilter from './CustomFilter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/CustomFilter',
  component: CustomFilter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A custom filter component that allows users to select filter criteria from a dropdown menu. Styled with custom CSS for a consistent look and feel.',
      },
    },
  },
  argTypes: {
    items: { control: 'object', description: 'Array of items to display as filter options.' },
    currentRefinement: { control: 'text', description: 'Currently selected filter option.' },
    refine: { action: 'refined', description: 'Function to handle changes in selection.' },
    clearedFilters: { control: 'boolean', description: 'Flag to indicate if filters should be reset.' },
  },
};

const Template = (args) => <CustomFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
  currentRefinement: '',
  refine: action('refine'),
  clearedFilters: false,
};

export const WithCurrentRefinement = Template.bind({});
WithCurrentRefinement.args = {
  ...Default.args,
  currentRefinement: 'Option 1',
};

export const WithClearedFilters = Template.bind({});
WithClearedFilters.args = {
  ...Default.args,
  clearedFilters: true,
};