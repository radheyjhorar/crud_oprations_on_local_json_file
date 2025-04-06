import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo/new_logo.jpg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [userLogedIn, setUserLogedIn] = useState(true);

  return (
    <div className="header-container">
      <div>
        <div className="logo">
          <Link to={"/"}>
          <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <nav>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/contacts"}>All Contacts</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/privacy"}>Privacy</Link>
      </nav>
      <div
        className="before-user-logged-in"
        style={userLogedIn ? { display: "none" } : { display: "flex" }}
      >
        <button>
          <Link to={"/signin"}>Sign In</Link>
        </button>
        <button>
          <Link to={"/signup"}>Sign Up</Link>
        </button>
      </div>
      <div className="after-user-logged-in" style={!userLogedIn ? { display: "none" } : { display: "flex" }}>
        <div className="user-and-option-icon">
          <span className="user-profile-icon"><FaUser /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
