import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Slidebar from './Slidebar'
import DataCard from './DataCard'
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
                    <Col lg={{ size: 10, offset: 1 }}>
                        <br />
                        <DataCard />
                    </Col>
                </Row>
            </div>

        )
    }

}

export default Home;