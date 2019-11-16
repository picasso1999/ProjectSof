import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
class SignUp extends Component {
    state = {
        userName:'',
        userPassword: '',
        userEmail: '',
        userFirstname:'',
        userLastname:'',
        userTelnumber:''
    }

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
        const{auth} = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>

                                <Label for="exUsername">Username</Label>
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
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="exPassword">Password</Label>
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
                            <FormGroup>

                                <Label for="exEmail">Email</Label>
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
                                            onChange={this.handleChange} />
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
                                            onChange={this.handleChange} />
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
                                    onChange={this.handleChange} />
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
