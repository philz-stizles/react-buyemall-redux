import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { log as Logger } from './../../utils/logger.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeNuQmVCBymp-UNtW5LoTdim-d9spAh4Q",
    authDomain: "kadysgiftcorner-c54da.firebaseapp.com",
    projectId: "kadysgiftcorner-c54da",
    storageBucket: "kadysgiftcorner-c54da.appspot.com",
    messagingSenderId: "997868317303",
    appId: "1:997868317303:web:3f3603aca1c4a93d717472"
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
  Logger(userRef)
  const userSnapShot = await userRef.get()
  Logger(userSnapShot)

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
      Logger('Error creating user', error.message)
    }
  }

  return userRef
}

const addCollectionAndDocuments = async (key, data) => {
  console.log(data)
  const collectionRef = firestore.collection(key)
  console.log(collectionRef)

  const batch = firestore.batch()
  data.forEach(item => {
    const newDocRef = collectionRef.doc()
    console.log(newDocRef)
    batch.set(newDocRef, item)

  })

  return await batch.commit()
}

const convertCollectionsSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      id: doc.id,
      routeName: encodeURI(title),
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    const {title} = collection
    accumulator[title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export { 
  firebase, 
  auth, 
  firestore, 
  signInWithGoogle, 
  createUserProfileDocument, 
  addCollectionAndDocuments, 
  convertCollectionsSnapshotToMap 
}