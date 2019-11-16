import React from 'react';
import Header from '../components/Header';
import '../App.css';
import Typeregis from '../components/Typeregis';

class Register extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Header />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Typeregis />
                        <br />
                    </div>
                </div>




            </div>

        );
    }
}

export default Register;
