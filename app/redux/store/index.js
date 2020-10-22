import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from '../reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const reducers = persistReducer(config, reducer);

const configureStore = () => {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  const persistor = persistStore(store);

  return {persistor, store};
};

export const {store, persistor} = configureStore();
