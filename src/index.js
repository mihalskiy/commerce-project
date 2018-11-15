import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import AppReducer from './redux/reducers/reducer.js'
import rootSaga from './redux/sagas/saga';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   AppReducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);
