import React from "react";
import { Link } from "react-router-dom";
import SignedInlinks from "./SignedInLinks";
import SignedOutlinks from "./SignedOutLinks";
import {connect } from 'react-redux'


const mystyle = {
  color: "white",
  backgroundColor: "#080808",
  padding: "10px",
  fontFamily: "Arial"
};












const Navbar = (props) => {
  const {auth, profile} = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInlinks profile={profile}/> : <SignedOutlinks/>
  return (
    <nav style={mystyle} className="nav-wrapper ">
      <div className="container">
        <Link to="/" className="brand-logo">
          Share A Thought
        </Link>
        { 



        links}
      </div>
    </nav>
             );
 };

const mapStateToProps = (state) =>{
  console.log(state)
 
  return{
    auth : state.firebase.auth,
    profile : state.firebase.profile

  }
}
export default connect(mapStateToProps)( Navbar);
