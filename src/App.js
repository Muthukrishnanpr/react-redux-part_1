import React, { Component } from 'react';
import CakeContainer from './components/cakeContainer';
import { Provider } from "react-redux"
import { store } from './redux/store';

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div className='App'>
            <CakeContainer />
          </div>
        </Provider>
      </>
    );
  }
}
