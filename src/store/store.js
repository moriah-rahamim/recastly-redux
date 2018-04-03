import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

const INITIAL_STATE = {
  currentVideo: null,
  videoList: [],
};

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
};

const store = configureStore(INITIAL_STATE);

export default store;
