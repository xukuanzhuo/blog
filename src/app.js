import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import './styles/app.css'
import 'normalize.css'

library.add(faIgloo)

ReactDOM.render(
  Routes,
  document.getElementById("app")
)
