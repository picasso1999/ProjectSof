import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import { Container, Card, CardTitle, CardText, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';



export default class Foodsearch extends Component {


  data = [firebase.firestore().collection("restaurant").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, " => ", doc.data());

    })
  })]
  Showdata(){
    
  }

  

  render() {
    return (

      

      <Row>
        
        <Card body>
          <CardText></CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Row>
    );
  }
}