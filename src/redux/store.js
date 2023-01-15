import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore, persistReducer,
FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactsReduser from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice'


const persistConfig = {
  key: 'contacts',
  storage,
   whitelist: ['contacts'] // blacklist: ['filter']
}
const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
     filter: filterReduser
  },
    
      middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
});
 export const persistor= persistStore(store)