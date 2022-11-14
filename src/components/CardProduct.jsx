import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleClick } from '../services/api';

export default class CardProduct extends Component {
  render() {
    const {
      name,
      image,
      price,
      source,
    } = this.props;
    return (
      <>
        <Link
          to={ source }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h1>{ name }</h1>
            <img src={ image } alt={ name } />
            <p>{ price }</p>
          </div>
        </Link>
        <button
          id={ price }
          type="button"
          title={ name }
          name={ image }
          data-testid="product-add-to-cart"
          onClick={ handleClick }
        >
          add cart
        </button>
      </>
    );
  }
}

CardProduct.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  source: PropTypes.string,
}.isRequired;
