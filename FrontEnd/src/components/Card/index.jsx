import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';


class Card extends Component {
  render() {
    const { title, description, imageUrl, userId, price } = this.props;
    return (
        <>
          <article className="card-body">
            <p className="card-title">{ title }</p>
            <p className="card-description">{ description }</p>
            <p className="card-imageUrl">{ imageUrl }</p>
            <p className="card-userId">{ userId }</p>
            <p className="card-price">{ price }</p>
          </article>
        </>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  userId: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.string
};

export default Card;