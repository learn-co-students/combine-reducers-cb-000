import authorsReducer from './authorsReducer'
import booksReducer from './booksReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    book: booksReducer,
    author: authorsReducer
  });


export default rootReducer
