// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import count from './reduces/count'
// import person from './reduces/person'
//
// export default new createStore(combineReducers({count,person}),applyMiddleware(thunk));


import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import count from './reduces/count'
import person from './reduces/person'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    combineReducers({count,person}),
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga);
export default store;
