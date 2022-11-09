import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <switch>
        <Route path="/" component={ Search } />
      </switch>
    </div>
  );
}
export default App;
