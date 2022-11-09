import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class InitialPage extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categoriesData = await getCategories();
    this.setState({ categories: categoriesData });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {
            categories.map((categorie) => (
              <li key={ categorie.id }>
                {categorie.name}
                <button
                  type="button"
                  data-testid="category"
                  name={ categorie.id }
                  id={ categorie.id }
                  value={ categorie.id }
                >
                  a
                </button>
              </li>
            ))
          }
        </ul>
        <div>
          <label htmlFor="searchInput">
            <input type="text" name="" id="searchInput" />
          </label>
          <h4 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </div>
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
