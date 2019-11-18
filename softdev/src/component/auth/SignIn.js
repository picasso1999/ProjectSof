import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class SignIn extends Component {
    state = {
        userEmail: '',
        userPassword: ''
    }

    uiConfig = {

        signInFlow: 'popup',

        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {

            signInSuccess: () => false
        }
    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 6 }}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: 5, offset: 1 }} sm="5" md={{ size: 2, offset: 7 }}>
                            <hr width="85%" align="right"  ></hr>
                        </Col>
                        or
                        <Col xs={{ size: 5, offset: 0 }} sm="5" md={{ size: 2, offset: 0 }}>
                            <hr width="80%" align="left" ></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="userEmail"
                                    placeholder="Username or Email"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <FormGroup>
                                <Input
                                    type="password"
                                    name="password"
                                    id="userPassword"
                                    placeholder="Password"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <Button color="primary" block >Login</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            {authError ? <p>{authError}</p> : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                        <hr width="90%" align="center" ></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                        New User? <a href="/Register/">Register</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                        <a href="/ForgetPass/"> Forget your password</a>
                        </Col>
                    </Row>



                </Form>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
