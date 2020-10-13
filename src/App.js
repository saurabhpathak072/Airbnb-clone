import React from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SearchPage from './Container/SearchPage/SearchPage';
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <Switch>
        <Route path="/search">
        <SearchPage/>
        </Route>
        <Route path="/"><Home/></Route>
      </Switch>
      <Footer/>
      {/**Home */}
        {/**Header */}
        {/**Banner */}
          {/**Search */}
        {/**Cards */}
        {/**Footer */}
      {/**SearchPage */}
      {/**Header */}
        {/**... */}
        </Router>
    </div>
  );
}

export default App;
