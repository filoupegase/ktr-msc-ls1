import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import UserService from './services/user.service';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
        response => {
          this.setState({
            content: response.data
          });
        },
        error => {
          this.setState({
            content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
          });
        }
    );
  }

  render() {
    return (
        <div className="App">
          { this.props.advertisements.map(({ id, title, imageUrl, description, price }) => (
              <Card
                  key={ `card-${ id }` }
                  id={ id }
                  imageUrl={ imageUrl }
                  title={ title }
                  description={ description }
                  price={ price }
              />
          )) }
        </div>
    );
  }
}

export default Home;
