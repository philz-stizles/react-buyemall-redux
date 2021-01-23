import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { selectCollections } from './store/redux/collection/collection.selectors'

// Pages
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import AuthPage from './pages/auth/auth.component';
import ContactPage from './pages/contact/contact.component';
import DashboardPage from './pages/dashboard/dashboard.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './api/firebase/firebase.utils'
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './api/firebase/firebase.utils'
import { setLoggedInUser } from './store/redux/auth/auth.actions'
import { log as Logger } from './utils/logger.js'
// import { selectCollectionsAsArray } from './store/redux/collection/collection.selectors'

import './App.css';

class App extends React.Component {
  authStateUnSubscription = null

  componentDidMount() {
    const { setLoggedInUser } = this.props
    // const { setLoggedInUser, collections } = this.props
    this.authStateUnSubscription = auth.onAuthStateChanged(async userAuth => {
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
      // addCollectionAndDocuments('collections', collections.map(({title, items}) => { title, items }))
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
          {/* Route below has a component with nested Routes, do not put the exact */}
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

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser,
  // collections: selectCollectionsAsArray(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
