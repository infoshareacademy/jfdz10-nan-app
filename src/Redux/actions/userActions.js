 import localForage from "localforage";

export const FETCH_USER = "FETCH_USER";
export const LOG_USER = "LOG_USER";
export const CHANGE_DATA = "CHANGE_DATA";

const fetchUser = (user) => dispatch => {
  
    dispatch({
      type: FETCH_USER,
      user
    })

};

const logUser = user => (dispatch, getState) => {
  localForage.setItem("currentUser", [...getState().users.currentUser, user]).then(() => {
    dispatch({
      type: LOG_USER,
      user
    });
  });
};

const changeData = (name,input) => {
  return {
    type: CHANGE_DATA,
    name,
    input
  }
}

export default {
  fetchUser,
  logUser,
  changeData
};