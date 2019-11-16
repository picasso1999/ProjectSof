import React from 'react';
import Header from '../components/Header';
import Foodsearch from '../components/Foodsearch';
import '../App.css';


class Fstore extends React.Component {
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

              <h1>FoodStore page</h1>
              <Foodsearch />
            </div>
          </div>
        </div>
  
      );
    }
  }
  
  export default Fstore;
  