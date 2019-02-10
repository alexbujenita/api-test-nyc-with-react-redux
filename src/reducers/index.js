import { combineReducers } from 'redux'
import hospitalsReducer from './hospitals.js'
import ipReducer from './ip-reducer.js'

export default combineReducers({
  hospitals: hospitalsReducer,
  ipAddress: ipReducer
})
