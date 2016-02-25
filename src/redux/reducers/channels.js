import { SENDBIRD_LIST_CHANNELS } from '../actionTypes'

export default function channel(state = {}, action) {
  switch (action.type) {
    case SENDBIRD_LIST_CHANNELS:
      return Object.assign(
        {},
        state,
        {
          page: action.data.page,
          next: action.data.next,
          list: action.data.channels
        }
      )
    default:
      return state
  }
}
