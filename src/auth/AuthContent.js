import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AuthContent = () => {

    return (
      <Fragment>
        <h5>Nie jestes zalogowany</h5>
        <Link to={"/sign-in"}>Zaloguj się</Link>
      </Fragment>)
    
  
}

export default AuthContent;