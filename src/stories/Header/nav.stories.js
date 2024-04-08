// nav.stories.js
import React from 'react';
import DrawerAppBar from './nav';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Navigation/DrawerAppBar',
  component: DrawerAppBar,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export const Default = () => <DrawerAppBar />;