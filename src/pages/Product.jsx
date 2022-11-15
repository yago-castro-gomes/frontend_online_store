import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleClick, getProductById } from '../services/api';
import LinkCart from '../components/LinkCart';

export default class Product extends Component {
  state = {
    productData: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    const data = await getProductById(id);
    this.setState({ productData: data });
  }

  render() {
    const { productData } = this.state;
    return (
      <>
        <LinkCart />
        <section>
          <h2>Product Details</h2>

          <div data-testid="product">
            <h3 data-testid="product-detail-name">{ productData.title }</h3>
            <img
              data-testid="product-detail-image"
              src={ productData.thumbnail }
              alt={ productData.title }
            />
            <span data-testid="product-detail-price">{ productData.price }</span>
          </div>
          <button
            id={ productData.price }
            type="button"
            title={ productData.title }
            name={ productData.thumbnail }
            data-testid="product-detail-add-to-cart"
            onClick={ handleClick }
          >
            add cart
          </button>
        </section>
      </>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape().isRequired,
};
