import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appSlice } from "./slices/appSlice";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
      app: appSlice.reducer,
});

const persistConfig = {
      key: "root",
      storage,
};

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
      reducer: reducers,
      devTools: true,
      middleware: [thunkMiddleware]
});

const persistor = persistStore(store);

export { store, persistor };
