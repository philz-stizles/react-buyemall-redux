import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// Pages
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import AuthPage from './pages/auth/auth.component';
import ContactPage from './pages/contact/contact.component';
import DashboardPage from './pages/dashboard/dashboard.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './api/firebase/firebase.utils'
import { log as Logger } from './utils/logger.js'
import AuthContext from './store/contexts/auth/auth.context'

import './App.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  useEffect(() => {
    const authStateUnSubscription = auth.onAuthStateChanged(async userAuth => {
      Logger(userAuth)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          Logger(snapShot.data())
          setLoggedInUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } 
      
      setLoggedInUser(userAuth)
    })

    return () => {
      authStateUnSubscription()
    }
  }, [])

  return (
    <div>
      <AuthContext.Provider value={loggedInUser}>
        <Header />
      </AuthContext.Provider>
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        {/* Route below has a component with nested Routes, do not put the exact */}
        <Route path='/shop' component={ShopPage}/>  
        <Route exact path='/sign-in' render={() => {
          return (loggedInUser) ? <Redirect to="/"/> : <AuthPage />
        }}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/dashboard' component={DashboardPage}/>
      </Switch>
    </div>
  )
}

export default App
