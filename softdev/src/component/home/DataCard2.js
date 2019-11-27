import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardDeck,
  CardBody
} from 'reactstrap';

const DataCard2 = (props) => {
    return (
      <CardDeck>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src={require("./img/Food5.jpg")} alt="Card image cap" />
          <CardBody>
            <CardTitle>Wrapped Shrimp</CardTitle>
            
           
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src={require("./img/Food6.jpg")} alt="Card image cap" />
          <CardBody>
            <CardTitle>French fries</CardTitle>
            
           
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src={require("./img/Food7.jpg")} alt="Card image cap" />
          <CardBody>
            <CardTitle>Koroke</CardTitle>
            
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardImg top width="100%" src={require("./img/Food8.jpg")} alt="Card image cap" />
          <CardBody>
            <CardTitle>Biscuit with Salmon</CardTitle>
            
          </CardBody>
        </Card>
      </CardDeck>
    );
  };
  export default DataCard2;