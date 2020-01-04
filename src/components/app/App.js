import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../../pages/Login'
import Statistic from '../../pages/Statistic'
import Department from '../../pages/Department'
import Category from '../../pages/Category'
import Bill from '../../pages/Bill'
import Dish from '../../pages/Dish'
import Table from '../../pages/Table'
import Employee from '../../pages/Employee'
import PrivateRoute from '../PrivateRoute'

export default class App extends Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/thongke"/>
            </Route>
            <PrivateRoute              
                exact
                path="/thongke"
                component={Statistic}
            />
            <PrivateRoute              
                exact
                path="/bophan"
                component={Department}
            />
            <PrivateRoute              
                exact
                path="/ban"
                component={Table}
            />
            <PrivateRoute              
                exact
                path="/danhmuc"
                component={Category}
            />
            <PrivateRoute              
                exact
                path="/hoadon"
                component={Bill}
            />
            <PrivateRoute              
                exact
                path="/monan"
                component={Dish}
            />
            <PrivateRoute              
                exact
                path="/nhanvien"
                component={Employee}
            />
            <Route path="/login" component={Login} />            
          </Switch>
      </Router>
    );
  }
}