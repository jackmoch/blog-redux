import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import createLogger from 'redux-logger'
import reducers from './reducers'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)} >
		<Router history={browserHistory} />
	</Provider>,
	document.querySelector('.container')
)