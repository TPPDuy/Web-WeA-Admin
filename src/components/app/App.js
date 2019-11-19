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
            <Route path="/thongke">
              <Statistic/>
            </Route>
            <Route path="/danhmuc">
              <Category/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
      </Router>
    );
  }
}