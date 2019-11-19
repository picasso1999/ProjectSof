import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
class SignIn extends Component {
    state = {
        userEmail: '',
        userPassword: ''
    }

    handleChange = (e) =>{
       this.setState({
            [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const{authError ,auth} = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>

                            <Label for="exampleEmail">Email</Label>
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
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
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
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Button color="primary" block >Login</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        {authError ? <p>{authError}</p> : null}
                    </Col>
                </Row>
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        <hr></hr>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs sm md={{ size: 6, offset: 3 }}>
                        <Col lg={{ size: 6, offset: 3 }}>
                            New User? <a href="/Register/">Register</a>
                        </Col>
                        <Col lg={{ size: 7, offset: 3 }}>
                            <a href="/ForgetPass/"> Forget your password</a>
                        </Col>
                    </Col>
                </Row>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
