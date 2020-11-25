import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase.initializeApp({
    apiKey: "AIzaSyDGe_IXgpT-TvyGLyhJUItUs6H-y4JcrV0",
    authDomain: "cooking-gallery.firebaseapp.com",
    databaseURL: "https://cooking-gallery.firebaseio.com",
    projectId: "cooking-gallery",
    storageBucket: "cooking-gallery.appspot.com",
    messagingSenderId: "915970553900",
    appId: "1:915970553900:web:fd707266fcf0343987b989",
    measurementId: "G-EHKG9GL4V6"
  }).firestore()
