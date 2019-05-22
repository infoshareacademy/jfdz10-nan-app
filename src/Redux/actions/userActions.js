import firebase from "firebase"

export const FETCH_USER = "FETCH_USER";
export const CHANGE_DATA = "CHANGE_DATA";

const fetchUser = () => dispatch => {
  firebase.auth().onAuthStateChanged(user =>
    {const login = user.displayName
      const email = user.email
      const password = user.password
      const img = user.photoURL
    dispatch({
      type: FETCH_USER,
      login,
      email,
      password,
      img
    })
    })
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