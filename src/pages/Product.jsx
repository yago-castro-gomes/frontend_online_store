import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    productData: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    const data = await getProductById(id);
    console.log(data);
    this.setState({ productData: data });
  }

  render() {
    const { productData } = this.state;
    return (
      <section>
        <h2>Product Details</h2>
        <AddToCart />

        <div data-testid="product">
          <h3 data-testid="product-detail-name">{ productData.title }</h3>
          <img
            data-testid="product-detail-image"
            src={ productData.thumbnail }
            alt={ productData.title }
          />
          <span data-testid="product-detail-price">{ productData.price }</span>
        </div>
      </section>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape().isRequired,
};
