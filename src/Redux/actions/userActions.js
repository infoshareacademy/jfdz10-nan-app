import firebase from "firebase"

export const FETCH_USER = "FETCH_USER";
export const LOG_USER = "LOG_USER";
export const CHANGE_DATA = "CHANGE_DATA";
export const REDIRECT_TO_LOGGED = "REDIRECT_TO_LOGGED"

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


//   return{
//     type: REDIRECT_TO_LOGGED,
//     login: "",
//     email: "",
//     password: "",
//   }
  
// }

export default {
  fetchUser,
  changeData,
  // redirectToLogged
};