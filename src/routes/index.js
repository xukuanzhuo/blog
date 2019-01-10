import React from 'react'
import { Provider } from 'react-redux'
 import { ConnectedRouter } from 'react-router-redux'
import { Router, Route, Switch } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import store from '../store'

import styles from 'styles/app.css'
import Home from 'pages/Home'
import Detail from 'pages/Articles/Article.js'
import Editor from 'pages/Editor/Editor.js'

const history = createBrowserHistory()

const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <div className={ styles.pageContainer }>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles/:id" component={Detail} />
          <Route exact path="/editor" component={Editor} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Routes
