import React , {Component} from 'react'
import Select from 'react-select'
import { compose} from 'redux'
import {connect} from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import CartList from './CartList'
class Cart extends Component{
    render(){
        console.log(this.props);
        const {projects,auth,data} = this.props
        if(!auth.uid) return <Redirect to='/Login/' />
        return(
            <Row>
                    <Col>
                        <CartList projects={projects} auth={auth} data={data}/>
                    </Col>
            </Row>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return{

        projects: state.firestore.ordered.cart,
        auth: state.firebase.auth,
        data : state.firestore.data.cart
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'cart'}
    ])
)(Cart)