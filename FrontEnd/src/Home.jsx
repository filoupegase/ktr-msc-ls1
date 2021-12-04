import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import { Link } from 'react-router-dom';
import CardHandler from './services/CardHandler';
import AuthService from './services/auth.service';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    CardHandler.getAllCard(user.user.username).then((params) => {
      console.log(params.data);
    });
  }


  render() {
    return (
        <div className="container">
          <h3>Vous n'avez pas encore de Carte de business, Ajoutez en Une !</h3>
          <Link to={ '/library' } className="nav-link">
            Library
          </Link>
        </div>
    );
  }
}

export default Home;
