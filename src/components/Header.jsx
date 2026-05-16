import { useState } from "react";

const Header = ({ cartCount }) => {

  const [showMenu, setShowMenu] =
    useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <h1 className="logo">
        Shoe<span>Mart</span>
      </h1>

      {/* DESKTOP NAV */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Collections</a>
        <a href="#">New Arrivals</a>
        <a href="#">Contact</a>
      </nav>

      {/* RIGHT SIDE */}
      <div className="header-right">

        {/* MOBILE MENU BUTTON */}
        <div
          className="menu-icon"
          onClick={() =>
            setShowMenu(!showMenu)
          }
        >
          ☰
        </div>

        {/* CART */}
        <div className="cart-container">
          <span className="cart-icon">
            🛒
          </span>

          <span className="cart-text">
            Cart
          </span>

          <span className="cart-count">
            {cartCount}
          </span>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {showMenu && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Collection</a>
          <a href="#">New Arrivals</a>
          <a href="#">Contact</a>
        </div>
      )}

    </header>
  );
};

export default Header;