import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    data: [],
    empty: true,
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem('dataCart'));
    if (cartData !== null) {
      this.setState({
        data: cartData,
        empty: false,
      });
    }
  }

  render() {
    const { data, empty } = this.state;
    return (
      <div>
        <h2>Shopping Cart</h2>
        {
          empty ? (
            <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          ) : (
            <div>
              {
                data.map((item) => (
                  <div key={ item.title }>
                    <h3 data-testid="shopping-cart-product-name">{ item.name }</h3>
                    <img src={ item.image } alt={ item.name } />
                    <p>{ item.price }</p>
                    <span data-testid="shopping-cart-product-quantity">1</span>
                  </div>
                ))
              }
            </div>)
        }
      </div>
    );
  }
}
