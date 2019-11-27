import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { RessignUp } from '../../store/actions/authActions'
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase/app';
import TextField from '@material-ui/core/TextField';

class ResSignUp extends Component {
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
        this.props.RessignUp(this.state)
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <Container>
                <br />
                <Form onSubmit={this.handleSubmit} required>
                    <Row>
                        <Col sm="12" md={{ size: 5, offset: 7 }}>

                            <Paper>
                                <Container>
                                    <Row>
                                        <Col>
                                            <br />
                                            <h3>Partner with us</h3>
                                            <br />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6>Enter your basic information to get started</h6>
                                            <br />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <form  >
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
                                                </form>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <form  >
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
                                                </form>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <form  >
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
                                                </form>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <form  >
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
                                                </form>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <form  >
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
                                                </form>
                                            </FormGroup>
                                        </Col>
                                    </Row>                           
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <form  >
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
                                                </form>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <form  >
                                                    <TextField
                                                        type="textarea"
                                                        name="address"
                                                        id="address"
                                                        label="Your store address"
                                                        variant="outlined"
                                                        fullWidth
                                                        margin="dense"
                                                        width='600'
                                                        onChange={this.handleChange} />
                                                </form>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button color="primary" block >Join Us!</Button>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        
                                        <Col>
                                            Already a member? <a href="/Login/">Login</a>
                                        </Col>
                                    </Row>


                                </Container>
                            </Paper>
                        </Col>
                    </Row>
                </Form >
            </Container >
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
        RessignUp: (newUser) => dispatch(RessignUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResSignUp)
