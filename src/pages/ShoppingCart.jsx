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
    this.recoverStorage();
  }

  recoverStorage = () => {
    const { data } = this.state;
    const cartData = JSON.parse(localStorage.getItem('dataCart'));
    console.log('dataCart'+ cartData);
    this.setState({ data: cartData, empty: false });
    console.log('aaa'+data);
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
                  <div key={ item.id }>
                    <h3 data-testid="shopping-cart-product-name">{ item.title }</h3>
                    <img src={ item.thumbnail } alt={ item.title } />
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
