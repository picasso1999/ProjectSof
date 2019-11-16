import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyBbg_1CpnM-IgAhlUcDO8qb0W6E_eJNO20",
    authDomain: "testapp-906b0.firebaseapp.com",
    databaseURL: "https://testapp-906b0.firebaseio.com",
    projectId: "testapp-906b0",
    storageBucket: "testapp-906b0.appspot.com",
    messagingSenderId: "178724891572",
    appId: "1:178724891572:web:7f986377235f40ab9820e1",
    measurementId: "G-CTXS5JJJWT"

}
firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;