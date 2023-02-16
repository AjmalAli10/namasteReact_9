import "../styles/Header.css";
import FoodLogo from "../assets/Food-Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className='header'>
      <a href='/'>
        <img
          className='logo'
          src={FoodLogo}
          alt='logo'
          width='100'
          height='100'
        />
      </a>
      <div className='nav-items'>
        <ul>
          <Link to='/'>
            <li className='nav-lists'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='nav-lists'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='nav-lists'>Contact</li>
          </Link>
          <li className='nav-lists'>Cart</li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
        )}
      </div>
    </nav>
  );
};
export default Header;
