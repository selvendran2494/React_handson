import { useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlinestatus();
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            style={{ width: "50px", height: " 50px" }}
            src={logoUrl}
            alt="My Logo"
            className="logo-img"
          />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li style={{ color: "black" }}>
            {onlineStatus ? "Online" : "Offline"}

            <span
              className={`status-indicator ${
                onlineStatus ? "online" : "offline"
              }`}
            ></span>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
