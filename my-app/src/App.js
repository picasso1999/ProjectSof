import React from 'react';
import Home from './page/Home'
import Fstore from './page/Fstore'
import Login from './page/Login'
import UserRegister from './page/UserRegister'
import './App.css';
import { Route } from 'react-router-dom'
import Register from './page/Register';



class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" component={Home} />
        <Route path="/FoodStore/" component={Fstore} />
        <Route path="/Login/" component={Login} />
        <Route path="/Register/" component={Register} />
        <Route path="/UserRegister/" component={UserRegister} />
        
      </div>

    );
  }
}


export default App;
