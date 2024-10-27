import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice.js';
import { filterReducer } from './filtersSlice.js';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsConfig = {
  key: 'contacts',
  storage,
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
