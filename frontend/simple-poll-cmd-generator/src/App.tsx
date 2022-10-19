import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Data/Store/store";
import Header from "./Presentation/Components/Header";
import CommandView from "./Presentation/Views/CommandView/CommandView";
import HomeView from "./Presentation/Views/HomeView/HomeView";

const GlobalStyles = css`
body {
  background-color: #2F3136;
  color: #72767D;
  margin: 0;
  font-family: 微軟正黑體;
}
`

const Main = styled.div({
  display: 'flex',
  justifyContent: 'center'
});

const Container = styled.div({
  backgroundColor: '#36393F',
  paddingTop: '1em',
  paddingBottom: '1em',
  width: '800px'
})

function App() {
  return (
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Header />
        <Main>
          <Container>
            <Routes>
              <Route path='/'>
                <Route index element={<HomeView />} />
                <Route path='command' element={<CommandView />} />
              </Route>
            </Routes>
          </Container>
        </Main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
