import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewProduct from './components/Cart/ViewProduct';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ViewProduct />
      </div>
    </Provider>
  );
}

export default App;
