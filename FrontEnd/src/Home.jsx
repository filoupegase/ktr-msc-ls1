import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import { Link } from 'react-router-dom';
import CardHandler from './services/CardHandler';
import AuthService from './services/auth.service';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      loading: true
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    CardHandler.getAllCard(user.user.username)
        .then((params) => {
          console.log(params.data);
          this.setState({
            content: params.data,
            loading: false
          });
        });
  }

  render() {
    const cards = !this.state.loading && this.state.content.map((elm, indx) => {
      console.log(elm);
      return <Card
          key={ indx }
          name={ elm.name }
          companyName={ elm.companyName }
          email={ elm.email }
          phoneNumber={ elm.phoneNumber }
          message={ elm.message }
      />;
    });
    return (
        <div className="container">
          <h3>Vous n'avez pas encore de Carte de business, Ajoutez en Une !</h3>
          <Link to={ '/library' } className="nav-link">
            Library
          </Link>
          { cards }
        </div>
    );
  }
}

export default Home;

/*<Card
    key={ inx }
    id={ id }
    name={ name }
    companyName={ companyName }
    email={ email }
    phoneNumber={ phoneNumber }
    message={ message }
/>*/
