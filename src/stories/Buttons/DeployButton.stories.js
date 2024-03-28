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
    repo: { control: 'text' },
    className: { control: 'text' },
  },
};

export const DefaultDeployButton = {
  args: {
    repo: 'https://github.com/your-repo/your-project',
    className: '',
  },
};