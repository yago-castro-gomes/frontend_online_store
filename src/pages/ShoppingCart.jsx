import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    data: [],
    empty: true,
  };

  componentDidMount() {
    // const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    // this.setState({ data: dataCart, empty: false });
    // const { data } = this.state;
    // console.log(dataCart);
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    console.log(dataCart);
    this.setState({ data: dataCart, empty: false });
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
                  <div key={ item.id } data-testid="shopping-cart-product-name">
                    <h3>{ item.title }</h3>
                    <img src={ item.thumbnail } alt={ item.title } />
                    <span>{ item.price }</span>
                  </div>
                ))
              }
            </div>)
        }
      </div>
    );
  }
}
