import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyC-jdkcnyR7-XH1mtA_Od9q4mdLTYsLmLI",
  authDomain: "ludvig-firebase-hooks.firebaseapp.com",
  projectId: "ludvig-firebase-hooks",
  storageBucket: "ludvig-firebase-hooks.appspot.com",
  messagingSenderId: "583548839546",
  appId: "1:583548839546:web:fb05cb5b6c2a8ddb0e7dc3"
})

export const auth = app.auth()
export default app