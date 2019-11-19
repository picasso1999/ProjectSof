import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const Typeregis = (props) => {
    return (
            <Row>
                <Col md={{ size: 4, order: 2, offset: 1 }}>
                    <Card>
                        <CardImg top width="100%" src={require("../image/img1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Register User</CardTitle>
                            <CardText>GeneralUser? NO!! If you want to exclusive User </CardText>
                            <Button href="/UserRegister/">Click me!</Button>
                        </CardBody>

                    </Card>
                </Col>


                <Col md={{ size: 4, order: 2, offset: 2 }}>
                    <Card>
                    <CardImg top width="100%" src={require("../image/img1.jpg")} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Join a Food Partner</CardTitle>
                            <CardText>Click below if you want your Foodshop to join with us! </CardText>
                            <Button href="/FShopRegister/">Join with Us</Button>
                        </CardBody>
                        
                    </Card>
                </Col>
            </Row>
        
    );
};

export default Typeregis;
