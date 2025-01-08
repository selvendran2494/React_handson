import { useContext, useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/Usercontext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const data = useContext(UserContext);
  console.log("data",data)
  // <p>{data.loggedInUser}</p>
  const onlineStatus = useOnlinestatus();
  return (
    <header className="flex justify-between items-center p-3 bg-red-100">
      <div className="logo">
        <a href="/">
          <img            
            src={logoUrl}
            alt="My Logo"           
          />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list flex items-center space-x-4">
          <li className="flex items-center" style={{ color: "black" }}>
            {onlineStatus ? "Online" : "Offline"}
            <span
              className={`status-indicator ${
                onlineStatus ? "online" : "offline"
              } ml-2`}
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
          <li className="flex items-center">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="ml-2">Add to Cart</span>
          </li>
          <p className="font-bold">{data.loggedInUser}</p>
          <button
            className=""
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
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