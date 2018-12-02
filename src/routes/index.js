import React from 'react'
import { Router, Route, IndexRoute } from "react-router"
import { Switch } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

import Home from '../views/Home'
import Detail from '../views/Detail'

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <div>
      <Route path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </div>
  </Router>
)

export default routes
