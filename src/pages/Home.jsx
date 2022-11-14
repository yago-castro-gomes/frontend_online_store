import React, { Component } from 'react';
import LinkCart from '../components/LinkCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import CardProduct from '../components/CardProduct';

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
        <LinkCart />
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
              {
                resultsItems.map((item) => (
                  <div key={ item.id }>
                    <CardProduct
                      id={ item.id }
                      name={ item.title }
                      price={ item.price }
                      image={ item.thumbnail }
                      source={ `/product/${item.id}` }
                    />
                  </div>
                ))
              }
            </li>
          )}
        </div>
      </section>
    );
  }
}
