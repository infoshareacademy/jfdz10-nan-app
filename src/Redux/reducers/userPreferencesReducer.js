const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES'

const initialState = {
  userPreferences: {}
}

export const setUserPreferences = (userPreferences) => ({
    type: SET_USER_PREFERENCES,
    userPreferences
  })

export default function(state = initialState, action) {
    switch(action.type) {
      case SET_USER_PREFERENCES: {
        return {
          ...state,
          userPreferences: action.userPreferences || {}
        }
      }
      default: {
        return state
      }
    }
  }