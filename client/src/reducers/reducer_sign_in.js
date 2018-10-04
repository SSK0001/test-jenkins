var DEFAULT_STATE = {
  redirect: false,
  errorMessage: null
}

const postLogin = (state, action) => {
  let newState = {}
  let data = action.payload

  Object.assign(newState, state, { data })
  return newState
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "POSTLOGIN":
      return postLogin(state, action)

    default:
      return state
  }
}
