import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    data: [],
    empty: true,
    qtd: 1,
  };

  componentDidMount() {
    const prevData = [];
    const newData = [];
    const cartData = JSON.parse(localStorage.getItem('dataCart'));

    if (cartData !== null) {
      const treatment = cartData.map((item) => item.name);
      treatment.forEach((item) => {
        if (!prevData.includes(item)) {
          prevData.push(item);
        }
      });
    }

    prevData.forEach((item) => {
      const value = cartData.find((item2) => item2.name === item);
      if (value) newData.push(value);
    });

    this.setState({ data: newData });
    const { data } = this.state;
    if (data.length === 0 && cartData === null) {
      this.setState({ empty: true });
    } else {
      this.setState({ empty: false });
    }
  }

  decreaseItem = ({ target }) => {
    const cartData = JSON.parse(localStorage.getItem('dataCart'));
    const { id } = target;
    const { qtd } = this.state;
    const qtdMin = 1;
    if (qtd > 1) {
      const decrease = qtd - qtdMin;
      this.setState({ qtd: decrease });
      const index = cartData.findIndex((item) => item.name === id);
      cartData.splice(index, 1);
      localStorage.setItem('dataCart', JSON.stringify(cartData));
    }
  };

  increaseItem = ({ target }) => {
    const cartData = JSON.parse(localStorage.getItem('dataCart'));
    const { id } = target;
    const { qtd } = this.state;
    const decrease = qtd + 1;
    this.setState({ qtd: decrease });

    const index = cartData.filter((item) => item.name === id);
    cartData.push(index[0]);
    localStorage.setItem('dataCart', JSON.stringify(cartData));
  };

  render() {
    const { data, empty, qtd } = this.state;
    return (
      <div>
        <h2>Shopping Cart</h2>
        {
          empty ? (
            <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          ) : (
            <div>
              {
                data.map((item, index) => (
                  <div id="sla" key={ index }>

                    <button
                      data-testid="remove-product"
                      id={ item.name }
                      type="button"
                      onClick={ this.removeItem }
                    >
                      x
                    </button>

                    <h3 data-testid="shopping-cart-product-name">{ item.name }</h3>
                    <img src={ item.image } alt={ item.name } />
                    <p>{ item.price }</p>

                    <button
                      data-testid="product-decrease-quantity"
                      id={ item.name }
                      type="button"
                      onClick={ this.decreaseItem }
                    >
                      -
                    </button>

                    <span
                      id={ item.name }
                      data-testid="shopping-cart-product-quantity"
                    >
                      { qtd }
                    </span>

                    <button
                      data-testid="product-increase-quantity"
                      id={ item.name }
                      type="button"
                      onClick={ this.increaseItem }
                    >
                      +
                    </button>

                  </div>
                ))
              }
            </div>)
        }
      </div>
    );
  }
}
