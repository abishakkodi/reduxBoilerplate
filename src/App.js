import React, { Component } from 'react';

import {Provider } from 'react-redux';

import store from './store';

import Posts from './components/Posts';

import Postform from './components/Postform';

import Counter from './components/Counter';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <Postform />
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;

