import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCyh-1iiHmXxlVUjFrVLDdo9SbAeFzoN7g',
  authDomain: 'gqlcourse.firebaseapp.com',
  databaseURL: 'https://gqlcourse.firebaseio.com',
  projectId: 'gqlcourse',
  storageBucket: 'gqlcourse.appspot.com',
  messagingSenderId: '240045543971',
  appId: '1:240045543971:web:827ed8a41b2f6c69',
}

class Firebase {
  db: firebase.firestore.Firestore

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
    }
    this.db = firebase.firestore()
  }
}

export default Firebase
