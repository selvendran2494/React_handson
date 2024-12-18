import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            style={{ width: "50px", height: " 50px" }}
            src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
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

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        alt="Delicious Food"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">Delicious Pizza</h2>
        <p className="card-price">$12.99</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <main className="main">
      <div className="container">
        {/* <h1 className="section-title">Popular Items</h1>             */}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </main>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
