import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Input } from 'reactstrap'
import CartList from './CartList'
import { getFirestore } from "redux-firestore"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import history from '../../history'
class Cart extends Component {
    total = 0;
    arr = [];
    dis = '';
    render() {
        if (!this.props.projects) {
            return <span>Loading...</span>;
        }
        const { projects, auth, data } = this.props
        for (var i = 0; i < this.props.projects.length; i++) {
            if (this.props.projects[i].uid == auth.uid) {
                this.total += this.props.projects[i].price;
                this.arr.push({ name: this.props.projects[i].name, price: this.props.projects[i].price, menu: this.props.projects[i].menu })
            }
        }
        console.log(this.arr)
        if (!auth.uid) return <Redirect to='/Login/' />
        return (

            <Container >
                <Grid container spacing={1}>

                    <Grid item xs={12} >
                        <CartList projects={projects} auth={auth} data={data} />                     
                    </Grid>
                    <Grid item xs={4} >
                        <h4>คำแนะนำพิเศษ (ไม่จำเป็นต้องระบุ)</h4>                     
                    </Grid>
                    <Grid item xs={12} >
                        <Input placeholder="เช่น ไม่ใส่หัวหอม" onChange={() => handleChange}>Your Discription</Input>
                    </Grid>


                    <br />
                    <Grid item xs={2}>
                        <br />
                        <Typography variant="h4" align="right">Total : {this.total} ฿</Typography>
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>

                    <Grid item xs={2}>
                        <br />
                        <Button variant="contained" color="primary" onClick={() => handleClick(this.total, this.props, this.arr, this.dis)}>Check Out</Button>
                    </Grid>

                </Grid>
            </Container>

        )
    }
}
const handleChange = e => {
    this.dis = e
}
const handleClick = (total, props, arr, dis) => {
    var a = window.confirm("Are you sure ?")
    if (a) {
        var firestore = getFirestore()
        firestore.collection('history').add({
            customeruid: props.auth.uid,
            store: arr,
            discription: dis
        })
        alert("Thankyou wait around 20-30 mins")
        setTimeout(function(){
            history.push('/')
            window.location.reload();
        },1500)
    }
    setTimeout(function () {
        firestore.collection('cart').get().then(docs => {

        })
    }, 1500)

}
const mapStateToProps = (state) => {
    return {

        projects: state.firestore.ordered.cart,
        auth: state.firebase.auth,
        data: state.firestore.data.cart
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'cart' }
    ])
)(Cart)