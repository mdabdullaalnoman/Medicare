import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import AboutUs from './Pages/AboutUs/AboutUs';
import BlogNews from './Pages/BlogNews/BlogNews';
import Shop from './Pages/Shop/Shop';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/blogNews">
          <BlogNews />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;