import {combineReducers} from 'redux';
import {userReducer} from './UserReducer';
import {favoritesReducer} from './FavoritesReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
});
