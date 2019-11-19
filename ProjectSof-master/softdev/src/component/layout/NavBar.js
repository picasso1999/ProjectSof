import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap';
import { Container } from 'reactstrap';
import SignInlink from './SignInlink'
import SignOutlink from './SignOutlink'
import {connect} from 'react-redux'

const NavBar = (props) => {
    const {auth} = props
    //console.log(auth)
    const link = auth.uid ? <SignInlink /> : <SignOutlink />;
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">K-FOOD</NavbarBrand>
                {link}
            </Container>
        </Navbar>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps)(NavBar)