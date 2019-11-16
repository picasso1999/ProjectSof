import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import auth from '../firebase';




export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: ''
        }
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
    logout = e => {
        e.preventDefault()
        auth.signOut().then(response => {
            this.setState({
                currentUser: null
            })
        })
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    currentUser: user
                })
            }
        })
    }

    onChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {
        e.preventDefault()

        const { email, password } = this.state

        auth
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                this.setState({
                    currentUser: response.user
                })
            })
            .catch(error => {
                this.setState({
                    message: error.message
                })
            })
    }
    render() {
        const { message, currentUser } = this.state

        if (currentUser) {
            return (
                <div>
                    <p>Hello {currentUser.email}</p>
                    <Button color="primary" onClick={this.logout}>Logout</Button>
                </div>
            )
        }
        return (
            <Form onSubmit={this.onSubmit}>
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                <Row>
                    <Col xs="5" sm="5" md={{ size: 3, offset: 3 }}>
                        <hr width="100%" align="center"></hr>
                    </Col>
                    or
                    <Col xs="5" sm="5" md={{ size: 3, offset: 0 }}>
                        <hr width="90%" align="left"></hr>
                    </Col>

                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>

                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="userEmail"
                                placeholder="Username or Email"
                                onChange={this.onChange} />

                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="userPassword"
                                placeholder="Password"
                                onChange={this.onChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Button color="primary" block >Login</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        <Col  lg={{size: 6, offset: 3}}>
                            New User? <a href="/Register/">Register</a>
                        </Col>
                        <Col lg={{size: 7, offset: 3}}>
                            <a href="/ForgetPass/"> Forget your password</a>
                        </Col>
                    </Col>
                </Row>

            </Form>



        );
    }
}

