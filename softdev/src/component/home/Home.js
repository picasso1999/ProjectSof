import React, { Component } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Slidebar from './Slidebar'
import DataCard from './DataCard'
class Home extends Component {
    render() {
        return (
        <div className="container-fluid"> 
                <div className="row">
                    <div className="col">
                        <Slidebar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col-lg-10">
                        <br />
                        <DataCard />
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div> 

        )
    }

}

export default Home;