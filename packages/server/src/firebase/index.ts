import * as admin from 'firebase-admin'

import key from './key'

let firestore: FirebaseFirestore.Firestore

const fbKey: admin.ServiceAccount = key as admin.ServiceAccount
function init() {
  let app = admin.initializeApp({
    credential: admin.credential.cert(fbKey),
    databaseURL: 'https://gqlcourse.firebaseio.com',
  })
  console.log('Firebase app ready! 1.0.0 🔥')
  firestore = app.firestore()
  firestore.settings({ timestampsInSnapshots: true })
}

export { firestore, init }
