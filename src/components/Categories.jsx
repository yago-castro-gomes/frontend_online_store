import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    getDataCategories: [],
  };

  async componentDidMount() {
    const dataCategories = await getCategories();
    this.setState({ getDataCategories: dataCategories });
    console.log();
  }

  render() {
    const { getDataCategories } = this.state;
    return (
      <div>
        {
          getDataCategories.map((cat) => (
            <li key={ cat.id }>
              <input
                name="cat"
                value={ cat.name }
                type="radio"
                data-testid="category"
              />
              <label htmlFor={ cat.name }>{ cat.name }</label>
            </li>
          ))
        }
      </div>
    );
  }
}
