import React, { Component } from 'react'
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import TextField from '@material-ui/core/TextField';

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
                            <br />



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
                                <from>
                                    <TextField
                                        type="username"
                                        name="username"
                                        id="userName"
                                        label="username"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        width='600'
                                        onChange={this.handleChange} />
                                </from>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <FormGroup>
                                <from>
                                    <TextField
                                        type="email"
                                        name="email"
                                        id="userEmail"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        width='600'
                                        onChange={this.handleChange} />
                                </from>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <FormGroup>
                                <from>

                                    <TextField
                                        type="password"
                                        name="password"
                                        id="userPassword"
                                        label="password"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        width='600'
                                        onChange={this.handleChange} />
                                </from>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <from>
                                            <TextField
                                                type="Firstname"
                                                name="Firstname"
                                                id="userFirstname"
                                                label="Firstname"
                                                variant="outlined"
                                                fullWidth
                                                margin="dense"
                                                width='600'
                                                onChange={this.handleChange} />
                                        </from>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <from>
                                            <TextField
                                                type="Lastname"
                                                name="Lastname"
                                                id="userLastname"
                                                label="Lastname"
                                                variant="outlined"
                                                fullWidth
                                                margin="dense"
                                                width='600'
                                                onChange={this.handleChange} />
                                        </from>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4, offset: 7 }}>
                            <FormGroup>
                                <from>
                                    <TextField
                                        type="Telnumber"
                                        name="Telnumber"
                                        id="userTelnumber"
                                        label="Telephone number"
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        width='600'
                                        onChange={this.handleChange} />
                                </from>
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
                    <br />





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
