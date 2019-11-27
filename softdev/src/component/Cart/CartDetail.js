import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { removetocart } from '../../store/actions/addCart';
import history from '../../history'
const CartDetail = (props) => {
    const { project ,auth ,id} = props;
    console.dir(id)
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
                           
                        </CardText>
                    </CardBody>
                    
                </Card>
                <br/>
                <Button  variant="outlined" color="primary" onClick = {() => hadleClick(id) }>Remove From Cart</Button>
                
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
async function hadleClick(id) {
    removetocart(id)
    setTimeout(function(){
        history.push('/FoodStore/')
        window.location.reload();
    },1500)
    
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
)(CartDetail)