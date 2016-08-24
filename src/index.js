import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/root';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './config/store';

//Components
import AppContainer from './components/container/AppContainer';

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
