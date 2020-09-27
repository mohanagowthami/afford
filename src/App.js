import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingProducts from './components/shoppingProducts';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>

          <Route exact path="/products" component={ShoppingProducts} />



        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
