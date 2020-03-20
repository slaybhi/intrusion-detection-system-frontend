import React from 'react';
import './App.css';
import 'animate.css'
import Home from './components/home';
import Filter from './components/filter'
import Result from './components/result';
//import Login from './components/login'
import {Switch,Route} from 'react-router-dom';
import Layout from './hoc/layout' 
function Routes() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/filter' exact component={Filter}/>
        <Route path='/result' exact component={Result}/>
        
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;