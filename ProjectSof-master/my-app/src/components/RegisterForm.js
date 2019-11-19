import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import auth from '../firebase';
import 'firebase/firestore';



export default class RegisterForm extends React.Component {
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
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                
            })
            .catch(error => {
                this.setState({
                    message: error.message
                })
            })

        const db=firebase.firestore();
        db.collection("users").add({
            firstname : document.getElementById("userFirstname").value,
            lastname  : document.getElementById("userLastname").value,
            tel : document.getElementById("userTelnumber").value,
            mail: document.getElementById("userEmail").value,
            username: document.getElementById("userName").value,
            password: document.getElementById("userPassword").value,


        });
        window.location.href="/Login/"
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

                            <Label for="exUsername">Username</Label>
                            <Input
                                type="username"
                                name="username"
                                id="userName"
                                placeholder="username"
                                onChange={this.onChange} />

                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="exPassword">Password</Label>
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
                        <FormGroup>

                            <Label for="exEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="userEmail"
                                placeholder="Email"
                                onChange={this.onChange} />

                        </FormGroup>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="exFirstname">Firstname</Label>
                                    <Input
                                        type="Firstname"
                                        name="Firstname"
                                        id="userFirstname"
                                        placeholder="Firstname"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="exLastname">Lastname</Label>
                                    <Input
                                        type="Lastname"
                                        name="Lastname"
                                        id="userLastname"
                                        placeholder="Lastname"
                                        onChange={this.onChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="exTelnumber">Tel. number</Label>
                            <Input
                                type="Telnumber"
                                name="Telnumber"
                                id="userTelnumber"
                                placeholder="Telephone number"
                                onChange={this.onChange} />
                        </FormGroup>
                    </Col>

                </Row>






                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Button color="primary" block >Sign Me UP!</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        <Row>
                            <Col md="3"></Col>
                            <Col md="auto">
                                Already a member? <a href="/Login/">Login</a>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                    </Col>
                </Row>

            </Form>


        );
    }
}

