import React, { Component } from 'react'
import CommonView from './Components/commonview'
import { Route, Switch } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
        <main>
          <Switch>
            <Route path="channel:" component={CommonView}/>
          </Switch>  
        </main>
    );
  }
}
