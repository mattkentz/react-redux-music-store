import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import rootReducer from './reducers/root';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './config/store';

//Components
import App from './components/presentation/App';
import ArtistListContainer from './components/container/ArtistListContainer';
import AlbumListContainer from './components/container/AlbumListContainer';

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/artist/:id" component={AlbumListContainer} />
        <IndexRoute component={ArtistListContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
