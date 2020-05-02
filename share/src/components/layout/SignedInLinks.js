import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./Navbar.css"
//navlink for active link
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut} from '../../store/actions/authAction'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li >
        <NavLink to="/create"><AddCircleOutlineIcon></AddCircleOutlineIcon> New Post</NavLink>
      </li >
      <li >
        <a href="/" onClick ={props.signOut}><ExitToAppIcon fontSize="small"></ExitToAppIcon> Log Out</a>
      </li>
      <li>
        <NavLink to="/userProfile" className="btn btn-floating blue lighten-1 ">
          {props.profile.initial}
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
