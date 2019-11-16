import React from 'react';
import Header from '../components/Header';
import Slidebar from '../components/Slidebar';
import DataCards from '../components/DataCards';
import '../App.css';

class Home extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>
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
              <DataCards />
            </div>
            <div className="col">
  
            </div>
          </div>
  
  
        </div>
  
      );
    }
  }
  
  export default Home;
  