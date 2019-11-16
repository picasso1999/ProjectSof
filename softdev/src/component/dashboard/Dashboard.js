import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Noti from './Noti'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose} from 'redux'
class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const {projects} = this.props;
        return (
            <Container>
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
        projects: state.firestore.ordered.projects
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)