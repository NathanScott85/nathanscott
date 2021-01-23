import React from 'react';
import Routes from './app-routes';
import styled, { css, ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styled-components';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      <Routes history={history} />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-size: 1em;
    ${({ theme }) => css`
        font-family: 'Roboto', sans-serif;
    `};
`;
