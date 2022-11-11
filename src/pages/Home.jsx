import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../components/AddToCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';

export default class Home extends Component {
  state = {
    inputValue: '',
    resultsItems: [],
    notFound: true,
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  showProducts = async () => {
    const { inputValue } = this.state;
    const response = await getProductsFromCategoryAndQuery(inputValue, inputValue);
    const data = response;
    this.setState({
      resultsItems: data.results,
      notFound: false,
    });
  };

  render() {
    const { inputValue, resultsItems, notFound } = this.state;
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
                value={ inputValue }
                name="inputValue"
                type="text"
                id="search"
                data-testid="query-input"
                onChange={ this.onInputChange }
              />
              <input
                data-testid="query-button"
                type="button"
                value="Pesquisar"
                onClick={ this.showProducts }
              />
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </label>
          </form>
          { notFound ? ('Nenhum produto foi encontrado') : (
            <li>
              { resultsItems.map((item) => (
                <Link
                  to={ `/product/${item.id}` }
                  data-testid="product-detail-link"
                  key={ item.id }
                >
                  <h1>{ item.title }</h1>
                  <img src={ item.thumbnail } alt={ item.title } />
                  <p>{ item.price }</p>
                </Link>))}
            </li>
          )}
        </div>
      </section>
    );
  }
}
