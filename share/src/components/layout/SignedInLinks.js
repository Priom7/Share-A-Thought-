import React from "react";
//navlink for active link
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut} from '../../store/actions/authAction'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Post</NavLink>
      </li>
      <li>
        <a href="/" onClick ={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1 ">
          AU
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToState = (dispatch)=>{
  return{
    signOut:()=> dispatch(signOut())
  }
}
export default connect(null,mapDispatchToState) (SignedInLinks);
