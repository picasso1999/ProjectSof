import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { getFirestore } from 'redux-firestore'
import project from '../projects/ProjectList'
class Dashboard extends Component {
    state = {
        doc: ''
    }
    handlechange = e => {
        const firestore = getFirestore()
        firestore.collection("projects").get().then((docs) => {
            docs.forEach((docs) => {
                if (docs.data().val == e.label) {
                    this.setState({
                        doc: docs.id
                    })
                    console.dir(this.state.doc)
                }
            })
        })
    }
    render() {
        //console.log(this.props);
        const { projects, auth } = this.props;
        var data = [
        ]
        const firestore = getFirestore()
        firestore.collection("projects").get().then((docs) => {
            docs.forEach((docs) => {
                let sel = docs.data().select
                let val = docs.data().val
                data.push({ value: sel, label: val })
            });
        })
        if (!auth.uid) return <Redirect to='/Login/' />
        return (
            <Container>
                <Row>
                    <Col xs ="8" sm="10"  md="10">
                        <Select id='search' placeholder="search for menu" options={data} onChange={this.handlechange} openMenuOnClick={this.handlesummit}></Select>
                    </Col>
                    <Col xs ="0" sm="0" md= "0">
                        <Button href={'/project/' + this.state.doc} key={this.state.doc}>Search</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <ProjectList projects={projects} />
                    </Col>

                </Row>
            </Container>

        )
    }

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)