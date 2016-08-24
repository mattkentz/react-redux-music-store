import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import rootReducer from './reducers/root';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './config/store';

//Components
import AppContainer from './components/container/AppContainer';
import ArtistListContainer from './components/container/ArtistListContainer';
import AlbumContainer from './components/container/AlbumContainer';

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/artist/:id" component={AlbumContainer} />
        <IndexRoute component={ArtistListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
