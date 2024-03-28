// DeployButton.stories.js
import React from 'react';
import DeployButton from './deploybutton';
import './deployButton.scss';

export default {
  title: 'Components/DeployButton',
  component: DeployButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    repo: { control: 'text', description: 'The repository URL for deploying to Netlify.' },
  },
};

const Template = (args) => <DeployButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  repo: 'https://github.com/your/repo',
};