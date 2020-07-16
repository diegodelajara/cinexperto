import Firebase from 'firebase'
import config from './config'
export const app = Firebase.initializeApp(config)
export const db = app.database()
// Refs
export const moviesRef = db.ref("movies")
