import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }
}
