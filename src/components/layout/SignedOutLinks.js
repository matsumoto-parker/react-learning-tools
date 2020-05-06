import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li className="nav-btn">
        <NavLink to="/" className="btn">
          Signup
        </NavLink>
      </li>
      <li className="nav-btn">
        <NavLink to="/" className="btn">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
