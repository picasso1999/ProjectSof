import React from 'react';
import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import NavBar from './component/layout/NavBar'
import Dashboard from './component/dashboard/Dashboard'
import ProjectDetail from './component/projects/ProjectDetail'
import SingIn from './component/auth/SignIn'
import SingUp from './component/auth/SignUp'
import CreateProject from './component/projects/CreateProject'
import Home from './component/home/Home'
import Cart from './component/Cart/Cart'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path= "/" component={Home} />
          <Route path= "/project/:id" component={ProjectDetail} />
          <Route path= "/Login/" component={SingIn} />
          <Route path= "/Register/" component={SingUp} />
          <Route path= "/FoodStore/" component={Dashboard} />
          <Route path= "/Create/" component={CreateProject} />
          <Route path= "/Cart/" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
