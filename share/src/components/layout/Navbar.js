import React from "react";
import { Link } from "react-router-dom";
import SignedInlinks from "./SignedInLinks";
import SignedOutlinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Share A Thought
        </Link>
        <SignedInlinks />
        <SignedOutlinks />
      </div>
    </nav>
  );
};

export default Navbar;
