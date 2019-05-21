import firebase from "firebase"

export const FETCH_USER = "FETCH_USER";
export const CHANGE_DATA = "CHANGE_DATA";

const fetchUser = () => dispatch => {
  firebase.auth().onAuthStateChanged(user =>
    dispatch({
      type: FETCH_USER,
      user
    })
  )
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
  changeData
};