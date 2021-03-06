import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import CMTheme from '../src/common/styles/CMTheme';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { ClimateFeedMockProvider } from '../src/contexts/climateFeedMock';
import { ClimateFeedProvider } from '../src/contexts/climateFeed';

const customViewports = {
  iPhoneX: {
    name: 'iPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...customViewports,
      ...MINIMAL_VIEWPORTS,
    },
    defaultViewport: 'iPhoneX',
  },
};

// Wrapper which goes around all stories
const Wrapper = ({ children }) => {
  const wrapperStyles = {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return <div style={wrapperStyles}>{children}</div>;
};

// All stories are wrapped in the theme
export const decorators = [
  (Story) => (
    <ClimateFeedProvider>
      <MuiThemeProvider theme={CMTheme}>
        <Story />
      </MuiThemeProvider>
    </ClimateFeedProvider>
  ),
];
