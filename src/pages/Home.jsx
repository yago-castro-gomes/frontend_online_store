import React, { Component } from 'react';

export default class Searchch extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search">
            Search:
            <input
              name="search"
              type="text"
              id="search"
              data-testid="home-initial-message"
            />
          </label>
          <p>
            Digite algum termo de pesquisa ou escolha uma
            categoria.

          </p>
        </form>
      </div>
    );
  }
}
