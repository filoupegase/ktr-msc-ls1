import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../../services/auth.service';
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Library from '../Library';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user.user
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={ '/' } className="navbar-brand">
              Home
            </Link>
            { currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={ '/' } className="nav-link">
                      { currentUser.username }
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={ '/library' } className="nav-link">
                      Library
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={ this.logOut }>
                      LogOut
                    </a>
                  </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={ '/Login' } className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={ '/Register' } className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
            ) }
          </nav>

          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={ <Home/> }/>
              <Route exact path="/login" element={ <Login/> }/>
              <Route exact path="/register" element={ <Register/> }/>
              <Route exact path="/library" element={ <Library/> }/>
            </Routes>
          </div>
        </div>
    );
  }
}

export default App;
