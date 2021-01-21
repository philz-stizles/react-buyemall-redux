import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Pages
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import AuthPage from './pages/auth/auth.component';
import ContactPage from './pages/contact/contact.component';
import DashboardPage from './pages/dashboard/dashboard.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './api/firebase/firebase.utils'
import { setLoggedInUser } from './store/redux/auth/auth.actions'

import './App.css';

class App extends React.Component {
  authStateUnSubscription = null

  componentDidMount() {
    const { setLoggedInUser } = this.props
    this.authStateUnSubscription = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          setLoggedInUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } 
      
      setLoggedInUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.authStateUnSubscription()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/sign-in' render={() => {
            return (this.props.loggedInUser) ? <Redirect to="/"/> : <AuthPage />
          }}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/dashboard' component={DashboardPage}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setLoggedInUser: user => dispatch(setLoggedInUser(user))
})

const mapStateToProps = ({ auth }) => ({
  loggedInUser: auth.loggedInUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
