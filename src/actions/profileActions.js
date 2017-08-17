const ActionType = {
  RECEIVE_PROFILE: 'RECEIVE_PROFILE'
}

const receiveProfile = (profile) => ({ type: ActionType.RECEIVE_PROFILE, profile })

// Simulate a HTTP request.
const fetchProfile = () => {
  return dispatch => {
    setTimeout(
      () => dispatch(receiveProfile({ name: 'User Name' })),
      100
    )
  }
}

export { ActionType, fetchProfile }
