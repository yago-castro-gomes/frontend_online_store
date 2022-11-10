import React, { Component } from 'react';

class Search extends Component {
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
            />
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
