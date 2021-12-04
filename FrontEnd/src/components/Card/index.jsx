import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';


class Card extends Component {
  render() {
    const { name, companyName, email, phoneNumber } = this.props;
    return (
        <>
          <article className="card-body">
            <p className="card-title">Name : { name }</p>
            <p className="card-description">companyName : { companyName }</p>
            <p className="card-imageUrl">email : { email }</p>
            <p className="card-userId">phoneNumber : { phoneNumber }</p>
          </article>
        </>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  companyName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.number
};

export default Card;