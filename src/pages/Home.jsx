import React, { Component } from 'react';
import Search from '../components/Search';
import AddToCart from '../components/AddToCart';

export default class Home extends Component {
  render() {
    return (
      <section>
        <h2>Home</h2>
        <AddToCart />
        <Search />
      </section>
    );
  }
}
