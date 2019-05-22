import firebase from "firebase"

export const FETCH_DATA = "FETCH_DATA";

const fetchData = (name, dataRef) => dispatch => {
  firebase.database().ref(dataRef)
    .once("value").then(snapshot =>
      dispatch(
      {type: FETCH_DATA,
        name,
        snapshot: snapshot.val()
      }))
}


export default {
  fetchData
};