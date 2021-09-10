import { combineReducers } from 'redux';
import alertReducer from './alert/alertReducer';
import itemsReducer from './items/itemsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['itemsReducer']
}

const rootReducer = combineReducers({
  alertReducer: alertReducer,
  itemsReducer: itemsReducer,
});

//Exporting modified rootReducer with persist capabilities
export default persistReducer(persistConfig, rootReducer);