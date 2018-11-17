import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Modul from './components/modul'
import ShoppingList from './components/shoppingList';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <NavBar />
                <Modul />
                <ShoppingList />

            </div>
        </Provider>
    );
  }
}

export default App;
