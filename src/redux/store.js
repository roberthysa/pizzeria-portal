import {combineReducers, createStore, applyMiddleware} from 'redux';
import productReducer from './productRedux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// define initial state and shallow-merge initial data
const initialState = {
  products: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
};

// define reducers
const reducers = {
  products: productReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
  applyMiddleware(thunk)
  )
);

export default store;
