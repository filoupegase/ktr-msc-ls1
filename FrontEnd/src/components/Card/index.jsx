import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';


class Card extends Component {
  render() {
    const { name, companyName, email, message, phoneNumber } = this.props;
    return (
        <>
          <article className="card-body">
            <p className="card-title">{ name }</p>
            <p className="card-description">{ companyName }</p>
            <p className="card-imageUrl">{ email }</p>
            <p className="card-userId">{ phoneNumber }</p>
            <p className="card-price">{ message }</p>
          </article>
        </>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  companyName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  message: PropTypes.number
};

export default Card;