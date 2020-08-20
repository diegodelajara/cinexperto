
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCe8QFuW6cKC6LJlCfTKTp2b8RWwjadY8c",
  authDomain: "starry-fiber-113218.firebaseapp.com",
  databaseURL: "https://starry-fiber-113218.firebaseio.com",
  projectId: "starry-fiber-113218",
  storageBucket: "starry-fiber-113218.appspot.com",
  messagingSenderId: "187279587660",
  appId: "1:187279587660:web:35dcd51b6a48dd042077e9",
  measurementId: "G-3MFPSGKYJX"
}

firebase.initializeApp(config)
export const db = firebase.database()
export const auth = firebase.auth()

export const moviesRef = db.ref('movies')