import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProduct from './CardProduct';

export default class Categories extends Component {
  state = {
    getDataCategories: [],
    getItemCategories: [],
  };

  async componentDidMount() {
    const dataCategories = await getCategories();
    this.setState({ getDataCategories: dataCategories });
  }

  showProducts = async ({ target }) => {
    const response = await getProductsFromCategoryAndQuery(target.id, target.value);
    const data = await response.results;
    this.setState({
      getItemCategories: data,
    });
  };

  render() {
    const { getDataCategories, getItemCategories } = this.state;
    return (
      <div>
        <div>
          {
            getDataCategories.map((cat) => (
              <li key={ cat.id }>
                <input
                  name="cat"
                  value={ cat.name }
                  type="radio"
                  data-testid="category"
                  onChange={ this.showProducts }
                />
                <label htmlFor={ cat.name }>{ cat.name }</label>
              </li>
            ))
          }
        </div>
        <div>
          { getItemCategories.map((item) => (
            <div key={ item.id }>
              <CardProduct
                id={ item.id }
                name={ item.title }
                price={ item.price }
                image={ item.thumbnail }
                source={ `/product/${item.id}` }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
