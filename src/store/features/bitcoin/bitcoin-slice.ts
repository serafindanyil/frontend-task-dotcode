import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface BitcoinTransaction {
	timestamp: number;
	sender: string;
	receiver: string;
	valueSatoshis: number;
}

interface BitcoinState {
	transactions: BitcoinTransaction[];
	totalBTCTransferred: number;
	isListening: boolean;
}

const initialState: BitcoinState = {
	transactions: [],
	totalBTCTransferred: 0,
	isListening: false,
};

const bitcoinSlice = createSlice({
	name: "bitcoin",
	initialState,
	reducers: {
		addTransaction: (state, action: PayloadAction<BitcoinTransaction>) => {
			state.transactions.unshift(action.payload);
			state.totalBTCTransferred += action.payload.valueSatoshis;
		},
		startListening: (state) => {
			state.isListening = true;
		},
		stopListening: (state) => {
			state.isListening = false;
		},
		restartData: () => initialState,
	},
});

const persistConfig = {
	key: "bitcoin",
	storage,
};

export const { addTransaction, startListening, stopListening, restartData } =
	bitcoinSlice.actions;

export default persistReducer(persistConfig, bitcoinSlice.reducer);
