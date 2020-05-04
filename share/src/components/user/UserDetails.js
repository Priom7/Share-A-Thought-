import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from "react-router-dom"

function UserDetails(props) {


  const {user, auth} = props; 
  console.log(user)
  if(!auth.uid){
    return <Redirect to="/signin"></Redirect>
  }
  if(user){
    return (
      <div>{user.id}</div>
    );

  }
  else{
    return(
     <div className="container center">
       <p>Loading Post....</p>
     </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps)=>{
  console.log(state)
  console.log(ownProps)
  const id = ownProps.match.params.id
  const users = state.firestore.data.users
  const user = users ? users[id] : null
  return{
  
  user : user,
  auth : state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(UserDetails);