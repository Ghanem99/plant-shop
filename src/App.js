import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LandingPage from './LandingPage';
import ProductListing from './ProductListing';
import CartPage from './CartPage';
import Header from './Header';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" component={ProductListing} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
