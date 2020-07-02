import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

import create from './component/create.component';
import edit from './component/edit.component';
import index from './component/index.component';


class App extends Component {
  render() {
    return (
     <Router>
       <div className = "container">
         <nav className = "navbar navbar-expand-lg navbar-light bg-light">
           <Link to={'/'} className="navbar-brand">Piyu Creation</Link>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
               <li>
               <Link to={'/'} className="nav-link">Home</Link>
               </li>
               <li>
               <Link to={'/create'} className="nav-link">Create</Link>
               </li>
               <li>
               <Link to={'/edit'} className="nav-link">Edit</Link>
               </li>
               <li>
               <Link to={'/index'} className="nav-link">index</Link>
               </li>
             </ul>
           </div>
         </nav>
          <br/>
          <h2>Welcome to Home</h2>
          <br/>
          <Switch>
            <Route exact path = '/create' component = {create} />
            <Route exact path = '/edit' component = {edit} />
            <Route exact path = '/index' component = {index} />
          </Switch>
       </div>
     </Router>
    );
  }
} 

export default App;
