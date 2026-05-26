import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyC857hb9j3pZXzGE32t2rxBQUGFjpksLgk',
  authDomain: 'agencia-roz.firebaseapp.com',
  databaseURL: 'https://agencia-roz-default-rtdb.firebaseio.com',
  projectId: 'agencia-roz',
  storageBucket: 'agencia-roz.firebasestorage.app',
  messagingSenderId: '671061203567',
  appId: '1:671061203567:web:874a311b72b0d1115e4b9a',
  measurementId: 'G-1E6RTW52N6',
}

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
