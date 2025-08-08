import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localforage from "localforage";

import bitcoinReducer from "./features/bitcoin/bitcoin-slice";
import workspaceReducer from "./features/workspace/workspace-slice";

localforage.config({
	name: "btcTrackerDB",
	storeName: "bitcoinStore",
	description:
		"Persistent storage for Bitcoin live transactions and workspace state",
});

const bitcoinPersistConfig = {
	key: "bitcoin",
	storage: localforage,
	whitelist: ["transactions", "totalBTCTransferred"],
};

const workspacePersistConfig = {
	key: "workspace",
	storage: localforage,
	whitelist: ["blocks", "highestZIndex"],
};

const persistedBitcoinReducer = persistReducer(
	bitcoinPersistConfig,
	bitcoinReducer
);

const persistedWorkspaceReducer = persistReducer(
	workspacePersistConfig,
	workspaceReducer
);

export const store = configureStore({
	reducer: {
		bitcoin: persistedBitcoinReducer,
		workspace: persistedWorkspaceReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
