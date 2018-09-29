import React, { Component } from 'react'
import MasterCommonView from './Components/mastercommonview'
import CommonView from './Components/commonview'
import { Route, Switch } from 'react-router-dom'
import WrappedNormalLoginForm from "./Components/login"

export default class Main extends Component {
  render() {
    return (
        <main>
          <Switch>
            <Route exact path = "/login" component = {WrappedNormalLoginForm}></Route>
            <Route path="/channel/:name" key={`/channel/:name`} component={CommonView}/>
            <Route path="/master/channel/:name" key={`/channel/:name`} component={MasterCommonView}/>
          </Switch>  
        </main>
    );
  }
}
