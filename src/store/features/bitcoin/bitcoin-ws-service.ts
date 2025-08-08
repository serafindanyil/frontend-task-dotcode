import { AppDispatch } from "../../store";
import { addTransaction, startListening, stopListening } from "./bitcoin-slice";

let socket: WebSocket | null = null;

export const connectBitcoinStream = () => (dispatch: AppDispatch) => {
	if (socket) return; // Prevent duplicate connections

	socket = new WebSocket(process.env.NEXT_PUBLIC_BTC_WS_URL as string);

	socket.onopen = () => {
		console.log("Connected to Bitcoin WebSocket");
		dispatch(startListening());
		socket?.send(JSON.stringify({ op: "unconfirmed_sub" }));
	};

	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);

		if (data.op !== "utx") return;

		const tx = data.x;
		const sender = tx.inputs[0]?.prev_out?.addr ?? "Unknown";
		const receiver = tx.out[0]?.addr ?? "Unknown";
		const valueSatoshis = tx.out[0]?.value ?? 0;

		dispatch(
			addTransaction({
				timestamp: tx.time,
				hash: tx.hash,
				sender,
				receiver,
				valueSatoshis,
			})
		);
	};

	socket.onclose = () => {
		console.log("Bitcoin WebSocket disconnected");
		socket = null;
		dispatch(stopListening());
	};
};

export const disconnectBitcoinStream = () => (dispatch: AppDispatch) => {
	if (socket) {
		socket.send(JSON.stringify({ op: "unconfirmed_unsub" }));
		socket.close();
		socket = null;
		dispatch(stopListening());
		// діспатч якщо що прибрати
	}
};

export const restartBitcoinStream = () => (dispatch: AppDispatch) => {
	disconnectBitcoinStream();
	dispatch({ type: "bitcoin/restartData" });
};
