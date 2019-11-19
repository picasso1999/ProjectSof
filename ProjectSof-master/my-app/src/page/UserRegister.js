import React from 'react';
import Header from '../components/Header';
import '../App.css';
import 'firebase/auth';
import RegisterForm from '../components/RegisterForm';

class Register extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Header />
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-4"></div>
                    <div className="col col-12 col-md-6">
                        <RegisterForm  />
                      
                    </div>
                </div>
               

            </div>
            
        );
    }
}

export default Register;