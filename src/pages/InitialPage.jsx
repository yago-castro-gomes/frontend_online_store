import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class InitialPage extends Component {
  state = {
    categories: [],
    inputText: '',
    isButtonDisable: true,
    search: [],
    isUndefined: false,
  };

  async componentDidMount() {
    const categoriesData = await getCategories();
    this.setState({ categories: categoriesData });
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isButtonDisable: false,
      });
    });
  };

  onButtonClick = async (event) => {
    event.preventDefault();
    const { inputText } = this.state;
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=$${inputText}`;
    const dataFetch = await fetch(url);
    const objJson = await dataFetch.json();
    const validInput = objJson.results.length === 0;
    this.setState({
      search: objJson.results,
      isUndefined: validInput,
      inputText: '',
      isButtonDisable: true,
    });
  };

  render() {
    const { categories, isButtonDisable, inputText, search, isUndefined } = this.state;
    return (
      <div>
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
        </div>
        <label
          data-testid="home-initial-message"
          htmlFor="searchInput"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            name="inputText"
            id="searchInput"
            data-testid="query-input"
            onChange={ this.onInputChange }
            value={ inputText }
            placeholder="Procure o seu produto"
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          disabled={ isButtonDisable }
          onClick={ this.onButtonClick }
        >
          Pesquisar
        </button>
        {
          isUndefined ? (<h4>Nenhum produto foi encontrado</h4>) : (
            <ol>
              {search.map((eachProduct) => (
                <li data-testid="product" key={ eachProduct.id }>
                  <p>{ eachProduct.title }</p>
                  <p>{ eachProduct.price }</p>
                  <img src={ eachProduct.thumbnail } alt={ eachProduct.title } />
                </li>
              ))}
            </ol>
          )
        }
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
