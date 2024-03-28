// CustomButton.stories.js
import React from 'react';
import CustomButton from './CustomButton';
import './customButton.scss';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button that supports external links and optional right arrow icons for navigation purposes. It allows for various styles through the `buttonClass` prop, making it versatile for different design needs.',
      },
    },
  },
  argTypes: {
    buttonClass: { control: 'text', description: 'CSS class for additional styling.' },
    buttonText: { control: 'text', description: 'The text to display inside the button.' },
    buttonLink: { control: 'text', description: 'The URL the button links to.' },
    target: { control: 'text', description: 'Specifies where to open the linked document.' },
  },
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Click Me',
  buttonLink: '#',
  target: '_blank',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  ...Default.args,
  buttonClass: 'specialButtonClass',
};