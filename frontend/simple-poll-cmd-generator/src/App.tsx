import React from 'react';
import { Global, css } from '@emotion/react'
import HomeView from './Presentation/Views/HomeView/HomeView';

function App() {
  const GlobalStyles = css`
    body {
      background-color: #2F3136;
      color: #72767D;
      margin: 0;
      font-family: 微軟正黑體;
    }
  `

  return (
    <>
      <Global styles={GlobalStyles} />
      <HomeView />
    </>
  );
}

export default App;
