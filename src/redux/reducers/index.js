import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import sendbird from './sendbird'
import language from './language'
import channels from './channels'
import activeChannels from './activeChannels'

export default combineReducers({
  router,
  sendbird,
  channels,
  activeChannels,
  language
})
