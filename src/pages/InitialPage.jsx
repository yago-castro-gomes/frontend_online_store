import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InitialPage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="searchInput">

          <input type="text" name="" id="searchInput" />
        </label>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <Link
          className="shoppingCart"
          data-testid="shopping-cart-button"
          to="./ShoppingCart"
        >
          ShoppingCart

        </Link>
      </div>
    );
  }
}

export default InitialPage;
