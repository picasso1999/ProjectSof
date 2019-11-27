import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardDeck,
  CardBody
} from 'reactstrap';

const DataCard = (props) => {
  return (
    <CardDeck>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food1.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Sandwich</CardTitle>
          
          
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food2.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Pizza</CardTitle>
          
          
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food3.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Soup</CardTitle>
         
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food4.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Spinach with Cheese</CardTitle>
          
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default DataCard;