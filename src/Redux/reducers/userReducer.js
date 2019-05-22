import {
  FETCH_USER,
  CHANGE_DATA
} from "../actions/userActions";

const initialState = {
  user: {},
  currentUser: {
    id: "",
    login: "",
    email: "",
    password: "",
    img: "",
    favoriteCats: [],
    favoriteBreeders: [],
    favoriteAccessories: []
  },
  login: "",
  email: "",
  password: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        user: action.user,
        currentUser: {
          login: action.login,
          email: action.email,
          password: action.password,
          img: action.img,
        }
      };
    }
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
