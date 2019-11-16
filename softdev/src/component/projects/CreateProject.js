import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {createProject} from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) =>{
       this.setState({
            [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.createProject(this.state)
    }

    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/Login/' />
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <br/>
                    <h5>Create New Project</h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>

                            <Label for="exTitle">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="exContent">Content</Label>
                            <Input
                                type="textarea"
                                name="content"
                                id="content"
                                placeholder="Content"
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Button color="primary" block >Create</Button>
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
        createProject : (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
