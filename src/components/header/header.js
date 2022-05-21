import { Link, NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/news">Spaceflight news</Link>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
};

export default Header;
