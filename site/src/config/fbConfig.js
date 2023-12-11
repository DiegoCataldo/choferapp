import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBYNxyNQEz_WFGJbJ3PaU46-_s-mfkRVSY",
  authDomain: "choferapp-eea9c.firebaseapp.com",
  projectId: "choferapp-eea9c",
  storageBucket: "choferapp-eea9c.appspot.com",
  messagingSenderId: "272365988955",
  appId: "1:272365988955:web:e0c73f72a3fdcdd7c8637e"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export const db = firebase.firestore();

export default firebase 

db.enablePersistence().catch(err => {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    console.log('persistance failed');
  } else if (err.code === 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    console.log('persistance not available');
  }
});