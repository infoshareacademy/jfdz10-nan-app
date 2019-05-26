import { FETCH_DATA } from "../actions/userActions";

const initialState = {
  routes: [],
  breeds: [],
  breeders: [],
  accessories: [],
  users: {
  }
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        [action.name]: action.snapshot || []
      };
    }
    default: {
      return state;
    }
  }
}

export const getNameById = (data, favId) => {
  data.filter(data => data.id === favId)
  .map(element => element.name)
};
