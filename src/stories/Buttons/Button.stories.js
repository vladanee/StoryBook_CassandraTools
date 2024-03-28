// CustomButton.stories.js
import React from 'react';
import CustomButton from './CustomButton';
import './customButton.scss';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonText: { control: 'text' },
    buttonLink: { control: 'text' },
    target: { control: 'text' },
    buttonClass: { control: 'text' },
  },
};

export const Default = {
  args: {
    buttonText: 'Click Me',
    buttonLink: 'https://example.com',
    target: '_blank',
    buttonClass: 'primary-button',
  },
};