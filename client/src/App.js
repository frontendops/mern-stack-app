import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ShoppingList from './components/shoppingList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <ShoppingList />
        
      </div>
    );
  }
}

export default App;
