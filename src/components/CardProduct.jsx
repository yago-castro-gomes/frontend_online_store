import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class CardProduct extends Component {
  componentDidMount() {
    localStorage.setItem('dataCart', JSON.stringify([]));
  }

  handleClick = async ({ target }) => {
    const response = await getProductById(target.name);
    console.log(response);
    const data = JSON.parse(localStorage.getItem('dataCart'));
    console.log(data);
    data.push(response);
    localStorage.setItem('dataCart', JSON.stringify(data));
  };

  render() {
    const {
      id,
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
          name={ id }
          type="button"
          data-testid="product-detail-add-to-cart"
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
