import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../../pages/Login'
import Statistic from '../../pages/Statistic'
import Category from '../../pages/Category'

export default class App extends Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/thongke"/>
            </Route>
            <Route path="/thongke" component={Statistic} />
            <Route path="/danhmuc" component={Category} />
            <Route path="/login" component={Login} />            
          </Switch>
      </Router>
    );
  }
}