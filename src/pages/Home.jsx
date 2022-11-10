import React, { Component } from 'react';
import AddToCart from '../components/AddToCart';
import Categories from '../components/Categories';

export default class Home extends Component {
  render() {
    return (
      <section>
        <h2>Home</h2>
        <AddToCart />
        <Categories />
        <div>
          <form>
            <label htmlFor="search">
              Search:
              <input
                name="search"
                type="text"
                id="search"
              />
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </label>
          </form>
        </div>
      </section>
    );
  }
}
