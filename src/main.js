import React, { Component } from 'react'
import MasterCommonView from './Components/mastercommonview'
import CommonView from './Components/commonview'
import { Route, Switch } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
        <main>
          <Switch>
            <Route path="/channel/:name" key={`/channel/:name`} component={CommonView}/>
            <Route path="/master/channel/:name" key={`/channel/:name`} component={MasterCommonView}/>
          </Switch>  
        </main>
    );
  }
}
