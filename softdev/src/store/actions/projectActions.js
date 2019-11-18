export const createProject = (project) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const time =new Date()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.userFirstname,
            authorLastName: profile.userLastname,
            authorId: authorId,
            createdAt: time
        }).then(() => {
            dispatch({type :'CREATE_PROJECT', project }); 
        }).catch((err) => {
            dispatch({type :'CREATE_PROJECT_ERROR', err }); 
        })
        
    }
}