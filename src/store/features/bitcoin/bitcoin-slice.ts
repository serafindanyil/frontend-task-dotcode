import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BitcoinTransaction {
	timestamp: number;
	hash: string;
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

export const { addTransaction, startListening, stopListening, restartData } =
	bitcoinSlice.actions;

export default bitcoinSlice.reducer;
