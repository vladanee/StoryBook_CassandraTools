// .storybook/mocks/gatsby.js
import React from 'react';

// Mock Gatsby's Link component with a standard anchor tag
export const Link = ({ children, to, ...rest }) => <a href={to} {...rest}>{children}</a>;

// Placeholder function for Gatsby's graphql queries
export const graphql = () => {};

// Mock for StaticQuery
export const StaticQuery = ({ children }) => children({});

// Mock for useStaticQuery
export const useStaticQuery = () => ({});