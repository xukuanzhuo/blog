import React from 'react'
import { Provider } from 'react-redux'
 import { ConnectedRouter } from 'react-router-redux'
import { Router, Route, Switch } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

import store from '../store'

import Home from '../views/Home'
import Detail from '../views/Detail'

const history = createBrowserHistory()

const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Routes
