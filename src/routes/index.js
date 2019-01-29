import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Router, Route, Switch } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import loadable from '@loadable/component'
import Loading from './Loading'
import store from 'store'
import styles from 'styles/app.css'

const history = createBrowserHistory()

const Home = loadable(() => import('pages/Home'), { fallback: Loading })
const Detail = loadable(() => import('pages/Articles/Article.js'), { fallback: Loading })
const Editor = loadable(() => import('pages/Editor/Editor.js'), { fallback: Loading })

const PracticeContext = loadable(() => import('pages/Practice/Context/Context.js'), { fallback: Loading })
const PracticeForwardingRef = loadable(() => import('pages/Practice/ForwardingRef/ForwardingRef.js'), { fallback: Loading })
const PracticeFragments = loadable(() => import('pages/Practice/Fragments/Fragments.js'), { fallback: Loading })

const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <div className={ styles.pageContainer }>
        <Switch>
          <Route exact path="/" component={props => <Home {...props} />} />
          <Route exact path="/articles/:id" component={props => <Detail {...props} />} />
          <Route exact path="/editor" component={props => <Editor {...props} />} />
          <Route exact path="/practice/context" component={props => <PracticeContext {...props} />} />
          <Route exact path="/practice/forwardingref" component={props => <PracticeForwardingRef {...props} />} />
          <Route exact path="/practice/fragments" component={props => <PracticeFragments {...props} />} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Routes
