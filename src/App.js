import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/dashboard' component={DashboardPage}/>
      </Switch>
    </div>
  );
}

export default App;
