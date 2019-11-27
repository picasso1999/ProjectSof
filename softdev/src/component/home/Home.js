import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Slidebar from './Slidebar'
import DataCard from './DataCard'
import DataCard2 from './DataCard2'
class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col>
                        <Slidebar />
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <br />
                        <h2>เมนูอาหารแนะนำ</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ size: 10, offset: 1 }}>
                        <br />
                        <DataCard />
                    </Col>
                </Row>
                
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                    <br />
                    <h2>ของทานเล่น</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ size: 10, offset: 1 }}>
                        <br />
                        <DataCard2 />
                    </Col>
                </Row>
            </div>

        )
    }

}

export default Home;