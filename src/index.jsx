import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import ErrorBoundary from './errorHandler/ErrorBoundary'
import store from './configs/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()

/* eslint-disable-next-line no-console */
reportWebVitals(console.log)
