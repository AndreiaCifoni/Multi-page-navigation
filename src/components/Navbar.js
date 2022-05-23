import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/about"}>
        About us
      </Link>
      <Link className="link" to={"/blog"}>
        Blog
      </Link>
    </div>
  );
};

export default Navbar;
