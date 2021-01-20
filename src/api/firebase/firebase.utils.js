import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFl7EoYEm4-ShideBuzO4lPUyz50ICmY0",
  authDomain: "buyemall.firebaseapp.com",
  projectId: "buyemall",
  storageBucket: "buyemall.appspot.com",
  messagingSenderId: "939412060969",
  appId: "1:939412060969:web:4193b890f1c9cd336a1538"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
const signInWithGoogle = () => auth.signInWithPopup(provider)

const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return 

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  console.log(userRef)
  const userSnapShot = await userRef.get()
  console.log(userSnapShot)

  if(!userSnapShot.exists) {
    const { displayName, email } = userAuth
    const creaedAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        creaedAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef
}

export { firebase, auth, firestore, signInWithGoogle, createUserProfileDocument }