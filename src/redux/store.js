import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist";

import contactsReducer from "./contactsSlice";
import filtersSlice from "./filtersSlice";


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});