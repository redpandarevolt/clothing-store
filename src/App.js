import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';
import SignUpAndSignUpPage  from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignUpAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
