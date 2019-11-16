import React from 'react';
import Header from '../components/Header';
import '../App.css';
import LoginForm from '../components/LoginForm';



class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Header />
                        <br />
                    </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-4"></div>
                    <div className="col col-12 col-md-6">
                        <LoginForm  />
                        </div>
                </div>

            </div>

        );
    }
}

export default Login;
