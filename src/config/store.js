import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

function configureStore(rootReducer, initialState) {
  const middlewares = [thunk];
  
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  
  return createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middlewares)
  )
}

export default configureStore;