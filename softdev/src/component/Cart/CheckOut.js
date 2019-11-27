import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
const CheckOut = (props) => {
    const { projects, auth , id } = props
    console.dir(projects)
    if (!auth.uid) return <Redirect to='/Login/' />
}
const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.cart;
    const project = projects ? projects[id] : null
    return {
        id : id,
        project: project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cart' }
    ])
)(CheckOut)