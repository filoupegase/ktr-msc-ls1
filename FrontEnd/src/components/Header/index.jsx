import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';


class Header extends Component {
  render() {
    return (
        <header>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink
                    className="header-link"
                    to="/"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                    className="header-link"
                    to="/create-card"
                >
                  Create Card
                </NavLink>
              </li>
              <li>
                <NavLink
                    className="header-link"
                    to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                    className="header-link"
                    to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                    className="header-link"
                    to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
    );
  };
}

export default Header;