import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class CardProduct extends Component {
  // componentDidMount() {
  //   localStorage.setItem('dataCart', JSON.stringify([]));
  // }

  handleClick = async ({ target }) => {
    const response = await getProductById(target.name);
    // console.log(response);
    // const targetId = target.name;
    const emptyStorage = JSON.parse(localStorage.getItem('dataCart')) === null;
    if (emptyStorage) {
      const firstProduct = [response];
      localStorage.setItem('dataCart', JSON.stringify(firstProduct));
    } else {
      const data = JSON.parse(localStorage.getItem('dataCart'));
      const dataProducts = [...data, response];
      localStorage.setItem('dataCart', JSON.stringify(dataProducts));
    }
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
