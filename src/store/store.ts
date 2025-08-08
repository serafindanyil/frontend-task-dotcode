import { configureStore } from "@reduxjs/toolkit";
import bitcoinReducer from "./features/bitcoin/bitcoin-slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const bitcoinPersistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(bitcoinPersistConfig, bitcoinReducer);

export const store = configureStore({
	reducer: {
		bitcoin: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
