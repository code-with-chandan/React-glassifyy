import React from 'react'

const Header = () => {
  return (
<nav className="container">
      <div className="logo">
        <img height="72px"
         src="/images/glassifyy.png.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Header;