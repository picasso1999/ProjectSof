import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
const ProjectDetail = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{project.title}</CardTitle>
                        <CardText>{project.content}</CardText>
                        <CardText>
                            <small className="text-muted">Post by {project.authorFirstName}{project.authorLastName}</small>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Card>

            </div>
        )
    }else{
        return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Loading project...</CardTitle>
                </CardBody>
            </Card>

        </div>


    )}
    


}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetail)