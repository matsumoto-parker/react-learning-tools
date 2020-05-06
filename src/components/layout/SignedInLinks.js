import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li className="nav-btn">
        <NavLink to="/" className="btn">
          New Project
        </NavLink>
      </li>
      <li className="nav-btn">
        <NavLink to="/" className="btn">
          Log Out
        </NavLink>
      </li>
      <li className="nav-btn">
        <NavLink to="/" className="btn">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
