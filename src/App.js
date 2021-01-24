import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './api/firebase/firebase.utils'

// Pages
import HomePage from './pages/home/home.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import AuthPage from './pages/auth/auth.component'
import ContactPage from './pages/contact/contact.component'
import DashboardPage from './pages/dashboard/dashboard.component'

import Header from './components/header/header.component'
import { setLoggedInUser } from './store/redux/auth/auth.actions'
import { log as Logger } from './utils/logger.js'

import './App.css';

const App = ({ loggedInUser, setLoggedInUser }) => {

  // UseEffect as ComponentDidMount with ComponentWillUnmount
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

      return function cleanup() {
        authStateUnSubscription()
      };
    })
  }, [setLoggedInUser])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
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

const mapDispatchToProps = dispatch => ({
  setLoggedInUser: () => dispatch(setLoggedInUser())
})

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
