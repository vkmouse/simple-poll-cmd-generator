import React from 'react';
import { Global, css } from '@emotion/react'
import HomeView from './Presentation/Views/HomeView/HomeView';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomeView />} />
            <Route path='command' element={<div>123</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
