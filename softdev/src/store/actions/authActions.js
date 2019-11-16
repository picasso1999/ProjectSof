export const signIn = (credentials) => {
    return (dispatch,getstate,{getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.userEmail,
            credentials.userPassword
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR' , err});
        });
    }
}

export const signOut = () => {
    return (dispatch,gerstate,{getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch ({ type: 'SIGNOUT_SUCCESS'});
        });
    }
}