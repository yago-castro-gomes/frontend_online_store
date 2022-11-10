import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Search from './pages/Search';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShoppingCart } />
      </Switch>
    </div>
  );
}
export default App;
