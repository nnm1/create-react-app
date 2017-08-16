import { combineReducers } from 'redux'

import layout from './layoutReducer'

const appReducer = combineReducers({
  layout
})

export default appReducer
