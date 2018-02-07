import { createStore, applyMiddleware } from 'redux';
import Reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
console.log(rootSaga);
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware)
);
console.log('Passando na Store')

sagaMiddleware.run(rootSaga);

export default store
