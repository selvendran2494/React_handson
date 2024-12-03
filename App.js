import React from "react";
import ReactDOM from "react-dom/client";
import img1 from './assets/logo.png'
import img2 from './assets/user-icon.jpg'

const TitleComponent = () => (
  <header className="header">
    <div className="logo">
      <img src={img1} alt="Logo" />
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="user-icon">
      <img src={img2} alt="User Icon" />
    </div>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);

