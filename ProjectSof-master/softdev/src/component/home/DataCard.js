import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const DataCard = (props) => {
  return (
    <CardDeck>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food1.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Food1</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Promotion Fooddata</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food2.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Food2</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Promotion Fooddata</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require("./img/Food3.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Food3</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Promotion Fooddata</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};
export default DataCard;