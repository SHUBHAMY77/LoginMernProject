import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import './navbar.css';

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    
      <div>
        {loggedIn === false && (
          <><ul >
          <li><Link  to="/">Home</Link></li>
          <li><Link  to="/register">Register</Link></li>
          <li><Link  to="/login">Log in</Link></li>
          </ul>
            
            
          </>
        )}
        {loggedIn === true && (
          <>
            <Link to="/customer">Customers</Link>
            <LogOutBtn />
          </>
        )}
      </div>
    );

}

export default Navbar;
