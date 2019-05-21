import { FETCH_USER, CHANGE_DATA, REDIRECT_TO_LOGGED } from "../actions/userActions";

const initialState = {
  currentUser: {},
  login: "",
  email: "",
  password: ""
};

export const redirectToLogged = () => {
  window.location.href="/logged"}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        currentUser: action.user
      };
    }
    // case REDIRECT_TO_LOGGED: {
    //   return {
    //     ...state,
    //     login: action.login,
    //     email: action.email,
    //     password: action.password
    //   };
    // }
    case CHANGE_DATA: {
      return {
        ...state,
        [action.name]: action.input
      };
    }
    default: {
      return state;
    }
  }
}
