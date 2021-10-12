import React from 'react';
import Header from './components/Header/Header.component';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:movieId' element={<Movie/>} />
          <Route path='/*' element={<NotFound/>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;
