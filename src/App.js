import React, { useEffect, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './api/firebase/firebase.utils'

// Pages
import HomePage from './pages/home/home.component'

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'
import { setLoggedInUser } from './store/redux/auth/auth.actions'
import { log as Logger } from './utils/logger.js'

import { GlobalStyles } from './global.styles';
import ErrorBoundary from './components/error-boundary/error-boundary.component'

// Lazy Loaded Pages
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const AuthPage = lazy(() => import('./pages/auth/auth.component'))
const ContactPage = lazy(() => import('./pages/contact/contact.component'))
const DashboardPage = lazy(() => import('./pages/dashboard/dashboard.component'))

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
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>

        <ErrorBoundary> {/* This should be a class component to be able to use "static getDerivedStateFromError()" */}
          <Suspense fallback={<Spinner />}>
            <Route path='/shop' component={ShopPage}/>

            <Route exact path='/sign-in' render={() => {
              return (loggedInUser) ? <Redirect to="/"/> : <AuthPage />
            }}/>

            <Route exact path='/checkout' component={CheckoutPage}/>

            <Route path='/contact' component={ContactPage}/>

            <Route path='/dashboard' component={DashboardPage}/>
          </Suspense>
        </ErrorBoundary>

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
