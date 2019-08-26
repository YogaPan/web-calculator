import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'

const logger = createLogger({ collapsed: true })
const store = createStore(rootReducer, applyMiddleware(logger))

export default store
