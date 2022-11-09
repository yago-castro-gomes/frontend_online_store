import React, { Component } from 'react';

class InitialPage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="searchInput">

          <input type="text" name="" id="searchInput" />
        </label>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </div>
    );
  }
}

export default InitialPage;
