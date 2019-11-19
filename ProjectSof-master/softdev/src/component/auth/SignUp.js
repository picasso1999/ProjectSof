import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class SignUp extends Component {
    state = {
        userName: '',
        userPassword: '',
        userEmail: '',
        userFirstname: '',
        userLastname: '',
        userTelnumber: ''
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
        this.props.signUp(this.state)
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 6 }}>
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
                                    type="username"
                                    name="username"
                                    id="userName"
                                    placeholder="username"
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
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="userEmail"
                                    placeholder="Email"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <Row>
                                <Col>
                                    <FormGroup>

                                        <Input
                                            type="Firstname"
                                            name="Firstname"
                                            id="userFirstname"
                                            placeholder="Firstname"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Input
                                            type="Lastname"
                                            name="Lastname"
                                            id="userLastname"
                                            placeholder="Lastname"
                                            onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <FormGroup>
                                <Input
                                    type="Telnumber"
                                    name="Telnumber"
                                    id="userTelnumber"
                                    placeholder="Telephone number"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <Button color="primary" block >Sign Me UP!</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <hr width="90%" align="center" ></hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            Already a member? <a href="/Login/">Login</a>
                        </Col>
                    </Row>





                </Form>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
