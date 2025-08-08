import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localforage from "localforage";

import bitcoinReducer from "./features/bitcoin/bitcoin-slice";

localforage.config({
	name: "btcTrackerDB",
	storeName: "bitcoinStore",
	description: "Persistent storage for Bitcoin live transactions",
});

const bitcoinPersistConfig = {
	key: "bitcoin",
	storage: localforage,
	whitelist: ["transactions", "totalBTCTransferred"],
};

const persistedBitcoinReducer = persistReducer(
	bitcoinPersistConfig,
	bitcoinReducer
);

export const store = configureStore({
	reducer: {
		bitcoin: persistedBitcoinReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
