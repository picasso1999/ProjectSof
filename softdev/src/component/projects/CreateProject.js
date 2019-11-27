import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import Paper from '@material-ui/core/Paper';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
class CreateProject extends Component {

  state = {
    name: '',
    address: '',
    select: '',
    val: '',
    image: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleChange2 = (e) => {
    this.setState({
      select: e.label
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.createProject(this.state)
    this.props.history.push('/FoodStore/')
  }


  render() {
    const { auth } = this.props;
    const data = [
      { label: 'เมนูเส้น' },
      { label: 'เมนูข้าว' },
      { label: 'เมนูตามสั่ง' },
      { label: 'เครื่องดื่ม' },
      {label : 'ของว่าง/ของหวาน'}
    ]



    if (!auth.uid) return <Redirect to='/Login/' />
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm="12" md={{ size: 4, offset: 7 }}>
              <br />
              <br />
              <br />
              <br />
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
                      <FormGroup>
                        <form  >
                          <TextField
                            type="name"
                            name="name"
                            id="name"
                            label="nameFoodStore"
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
                            type="text"
                            name="address"
                            id="address"
                            label="Add your address"
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
                        
                        <Select required 
                        id="select" 
                        options={data} 
                        onChange={this.handleChange2}>Menu</Select>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                      <form  >
                          <TextField
                            type="text"
                            name="menu"
                            id="val"
                            label="Menu"
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
                    <Col md="6">
                      <FormGroup>
                      <form  >
                          <TextField
                            type="number"
                            name="price"
                            id="price"
                            label="Price"
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            width='600'
                            onChange={this.handleChange} />
                        </form>            
                      </FormGroup>
                    </Col>
                    <Col>
                    <br/>
                      <Input type="file" name="imgfile" id="img" />
                    </Col>
                  </Row>



                  <Row>
                    <Col>
                      <Button color="primary" block >SUBMIT</Button>
                      <br />
                    </Col>
                  </Row>
                </Container>
              </Paper>
            </Col>
          </Row>
        </Form>
        <Container>
          <br />
          <br />
          <br />
          <br />


          <Row>
            <Col>
              <h1>Why be a GrabFood Merchant-partner</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="12" md={{ size: 5, offset: 1 }}>
              <Card>
                <CardImg top width="100%" src={require("./img/img1.jpg")} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h4"> Market to our customers. </CardTitle>
                  <CardText> Grow your business by tapping on our marketing channels to reach millions of hungry Grab customers. </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md={{ size: 5, offset: 0 }}>
              <Card>
                <CardImg top width="100%" src={require("./img/img2.jpg")} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Keep them coming back.</CardTitle>
                  <CardText>Reward and retain your customers by leveraging on the GrabRewards loyalty programme.</CardText>
                </CardBody>
              </Card>
              <br />
            </Col>

          </Row>
        </Container>
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
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
