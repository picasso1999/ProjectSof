import React, { Component } from 'react'
import { Container,Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {createProject} from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Select from 'react-select'
class CreateProject extends Component {
      
        state = {
            name: '',
            address: '',
            select:'',
            val:''
        }
    
    handleChange = (e) =>{
       this.setState({
            [e.target.id]: e.target.value
       })
    }
    handleChange2 = (e) =>{
        this.setState({
             select :e.label
        })
     }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')

    }
   
    render() {
        const {auth} = this.props;
        const data =[
                {label : 'เมนูเส้น'},
                {label : 'เมนูข้าว'},
                {label : 'เมนูตามสั่ง'} ,
                {label:'เครื่องดื่ม'}
        ]
            
        
        if(!auth.uid) return <Redirect to='/Login/' />
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <br/>
                    <h5>Make your restuarant</h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>

                            <Label for="exName">Name of your restuarant!</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="name"
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Label for="exAddress">Address</Label>
                            <Input
                                type="textarea"
                                name="address"
                                id="address"
                                placeholder="Add your address"
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <FormGroup>
                            <Select id="select" options={data} onChange={this.handleChange2}>Menu</Select>
                            <Container>  
                                <Row>
                                    <Col sm={8}><Input
                                        type="textarea"
                                        name="menu"
                                        id="val"
                                        placeholder="Menu"
                                        onChange={this.handleChange} ></Input>
                                    </Col>
                                    <Col>
                                    <Input
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="Price"
                                        onChange={this.handleChange}>
                                    </Input>
                                    </Col>
                                </Row>
                            </Container>
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
