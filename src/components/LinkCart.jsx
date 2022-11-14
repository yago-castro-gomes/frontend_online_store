import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinkCart extends Component {
  render() {
    return (
      <Link to="/cart">
        <button data-testid="shopping-cart-button" type="submit">
          Cart
        </button>
      </Link>
    );
  }
}
