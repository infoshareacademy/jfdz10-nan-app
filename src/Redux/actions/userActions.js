import firebase from "firebase";

export const FETCH_USER = "FETCH_USER";
export const FETCH_DATA = "FETCH_DATA";
export const CHANGE_DATA = "CHANGE_DATA";

const fetchUser = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    dispatch({
      type: FETCH_USER,
      user
    });
  });
};

const changeData = (name, input) => {
  return {
    type: CHANGE_DATA,
    name,
    input
  };
};

const fetchData = (name, dataRef) => dispatch => {
  firebase
    .database()
    .ref(dataRef)
    .once("value")
    .then(snapshot =>
      dispatch({
        type: FETCH_DATA,
        name,
        snapshot: snapshot.val()
      })
    );
};

export default {
  fetchUser,
  fetchData,
  changeData
};
