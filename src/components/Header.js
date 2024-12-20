import { logoUrl } from "../utils/constants";

const Header = () => {
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
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header