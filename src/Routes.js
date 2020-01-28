import React from 'react';
import './App.css';
import Home from './components/home';
import test from './components/filter'
import Result from './components/result';
import {Switch,Route} from 'react-router-dom';
import Layout from './hoc/layout' 
function Routes() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/test' exact component={test}/>
        <Route path='/result' exact component={Result}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;