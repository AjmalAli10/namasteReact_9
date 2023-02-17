import "../styles/Header.css";
import FoodLogo from "../assets/Food-Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utlis/useOnline";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline()
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
          <Link to='/Instamart'>
            <li className='nav-lists'>Instamart</li>
          </Link>
          <li className='nav-lists'>Cart</li>
        </ul>
      </div>
      <h4>{isOnline ? "🟢"+ "Online" : "🛑" + " Disconnected"}</h4>
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
