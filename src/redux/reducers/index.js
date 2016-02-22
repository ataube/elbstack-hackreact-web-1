import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

import language from './language'

export default combineReducers({
  router: routerStateReducer,
  language
})
