import { combineReducers } from 'redux';
import booksReducer from 

const rootReducer = combineReducers({
  books: booksReducer
});

export default rootReducer;
