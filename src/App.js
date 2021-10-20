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
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import FirebaseProviders from './Context/FirebaseProviders';
import firebaseInitialize from './Firebase/firebaseInit';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  return (
    <FirebaseProviders>
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
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </FirebaseProviders>
  );
};

export default App;