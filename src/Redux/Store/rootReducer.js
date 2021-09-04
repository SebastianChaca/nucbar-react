import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '../Reducers/cartReducer';
import productReducer from '../Reducers/productReducer';
import userReducer from '../Reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
