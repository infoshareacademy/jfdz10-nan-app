import React from 'react'
import { withRouter } from 'react-router';

const SingleCat = (props) => {

  return (
    <>
    <h1>{props.match.params.id}</h1>
  
    </>
  )
}

export default withRouter(SingleCat)
