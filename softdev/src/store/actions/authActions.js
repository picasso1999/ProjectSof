export const signIn = (credentials) => {
    return (dispatch, getstate, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.userEmail,
            credentials.userPassword
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, gerstate, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.userEmail,
            newUser.userPassword
        ).then(resp => {
            return firestore.collection("users").doc(resp.user.uid).set({
                userName: newUser.userName,
                userFirstname: newUser.userFirstname,
                userLastname: newUser.userLastname,
                initials: newUser.userFirstName[0] + newUser.userLastname[0],
                userTelnumber: newUser.userTelnumber
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        });
    }
}