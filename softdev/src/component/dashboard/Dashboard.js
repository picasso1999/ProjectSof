import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Noti from './Noti'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Select from 'react-select'
import { getFirestore } from 'redux-firestore'
import project from '../projects/ProjectList'
class Dashboard extends Component {
    handlechange = e =>{
        
    }
    handlesummit =e=>{
        return(
            <Redirect to={'/project/' + project.id} key={project.id}>
                </Redirect>
        )
    }
    render() {
        //console.log(this.props);
        const {projects, auth} = this.props;
        var data =[
        ]
        const firestore = getFirestore()
        firestore.collection("projects").get().then((docs) =>{
            docs.forEach((docs) => {
                let sel = docs.data().select
                let val = docs.data().val
                data.push({value:sel,label:val})
            });
        })
        if(!auth.uid) return <Redirect to='/Login/' />
        return (
            <Container>
                <Select id='search' placeholder="search for menu" options={data} onChange={this.handlechange} openMenuOnClick={this.handlesummit}></Select>
                <Row>
                    <Col>
                        <ProjectList projects={projects}/>
                    </Col>
                    <Col>
                        <Noti />
                    </Col>
                </Row>
            </Container>

        )
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)