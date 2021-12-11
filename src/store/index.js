import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import count from './reduces/count'
import person from './reduces/person'

export default new createStore(combineReducers({count,person}),applyMiddleware(thunk));