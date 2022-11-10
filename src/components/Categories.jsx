import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categories extends Component {
  state = {

    getDataCategories: [],
    getItemCategories: [],
  };

  async componentDidMount() {
    const dataCategories = await getCategories();
    this.setState({ getDataCategories: dataCategories });
    console.log();
  }

  showProducts = async ({ target }) => {
    const response = await getProductsFromCategoryAndQuery(target.id, target.value);
    const data = await response.results;
    this.setState({
      getItemCategories: data,
    });
    console.log(data);
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
            <li data-testid="product" key={ item.id }>
              <h1>{ item.title }</h1>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{ item.price }</p>
            </li>))}
        </div>
      </div>
    );
  }
}
