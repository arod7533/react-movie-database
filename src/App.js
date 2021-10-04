import React from 'react';
import Header from './components/Header/Header.component';
import Home from './components/Home';

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
