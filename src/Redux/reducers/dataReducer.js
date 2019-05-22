import {
  FETCH_DATA
} from "../actions/dataActions";

const initialState = {
  routes: [],
  breeds: [],
  breeders: [],
  accessories: [],
  user: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        [action.name]: action.snapshot
      };
    }
    default: {
      return state;
    }
  }
}