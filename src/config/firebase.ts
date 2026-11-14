
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

// Firebase se descarga aparte y solo cuando un componente lo necesita (me gusta del blog,
// testimonios): así no pesa en la carga inicial de la página.
let dbPromise: Promise<{ database: import('firebase/database').Database; fb: typeof import('firebase/database') }> | null = null

export function loadDatabase() {
  if (!dbPromise) {
    dbPromise = Promise.all([import('firebase/app'), import('firebase/database')]).then(([appMod, fb]) => ({
      database: fb.getDatabase(appMod.initializeApp(firebaseConfig)),
      fb,
    }))
  }
  return dbPromise
}
