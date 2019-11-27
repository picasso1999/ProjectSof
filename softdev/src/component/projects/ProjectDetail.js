import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { addtocart } from '../../store/actions/addCart';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ProjectDetail = (props) => {
    const { project ,auth } = props;
    if (!auth.uid) return <Redirect to='/Login/' />
    if (project) {
        return (
            <div>
                <pre>
                <Card>
                    <CardBody>
                        <CardTitle>ขื่อร้าน =>{project.name}</CardTitle>
                        <CardText>ชื่อเมนู =>{project.val}</CardText>
                        <CardText>ราคา => {project.price}</CardText>
                        <CardText>ที่อยู่ => {project.address}</CardText>
                        <CardText>
                            <small className="text-muted">Post by {project.authorFirstName}{project.authorLastName}</small>
                            <small className="text-muted">{moment(project.createdAt.toDate().toString()).calendar()}</small>
                            <br></br>
                            <br></br>
                           <Button variant="outlined" color="primary" className="Butter" id="butterfly" onClick = {() => addtocart(auth.uid,project.name,project.val,project.price,project.image)} >ADD TO CART !</Button>
                        </CardText>
                    </CardBody>
                </Card>
                
                </pre>
            </div>
        )
    } else {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Loading project...</CardTitle>
                    </CardBody>
                </Card>

            </div>


        )
    }



}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetail)