import * as firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/functions'

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const makeAdmin = (userAdmin) => {
  return (dispatch, getState, {getFirebase}) => {

    const addAdminRole =  firebase.functions().httpsCallable('addAdminRole');
    addAdminRole({email: userAdmin.email}).then( result => {
      console.log(result);
      dispatch({ type: 'MAKEADMIN_SUCCESS' })
    });
  }
}
export const signUp = (newUser) => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();



    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then( (userCredential)=> {
      return firestore.collection('dashboardUsers').doc(userCredential.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        cargo: newUser.cargo
      });
    }).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'LOGIN_ERROR', err });
    });



    /*

    const addUser =  firebase.functions().httpsCallable('addUser');
    addUser({
      email: newUser.email,
      password: newUser.password }).then( resp => {
      return firestore.collection('users').doc(resp.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        cargo: newUser.cargo
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  */
  } 
}