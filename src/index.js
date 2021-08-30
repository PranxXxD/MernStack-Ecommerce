import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"; 
import "antd/dist/antd.css";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';

// Store
const Store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <Provider store= {Store}>
  {/* <React.StrictMode> */}
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);
