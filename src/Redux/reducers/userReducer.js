import {
  FETCH_USER,
  CHANGE_DATA,
  HANDLE_EDIT
} from "../actions/userActions";

const initialState = {
  currentUser: {},
  displayName: "",
  email: "",
  password: "",
  editId: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        currentUser: 
          action.user
      };
    }
    case CHANGE_DATA: {
      return {
        ...state,
        [action.name]: action.input
      };
    }
    case HANDLE_EDIT: {
      return {
        ...state,
        editId: action.editId
      };
    }
    default: {
      return state;
    }
  }
}
