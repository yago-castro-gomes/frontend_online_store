import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CardProduct extends Component {
  handleClick = async ({ target }) => {
    const bag = {
      name: target.title,
      image: target.name,
      price: target.id,
    };
    const emptyStorage = JSON.parse(localStorage.getItem('dataCart')) === null;
    if (emptyStorage) {
      localStorage.setItem('dataCart', JSON.stringify([bag]));
    } else {
      const data = JSON.parse(localStorage.getItem('dataCart'));
      const dataProducts = [...data, bag];
      localStorage.setItem('dataCart', JSON.stringify(dataProducts));
    }
  };

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
          onClick={ this.handleClick }
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
