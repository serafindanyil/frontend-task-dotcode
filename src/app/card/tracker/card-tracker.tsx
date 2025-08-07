import CardBase from "../card-base";
import { Bitcoin } from "lucide-react";
import StatusConnection from "@/app/status/status-connection/status-connection";

const CardTracker = () => {
	return (
		<CardBase className="flex items-center justify-between gap-2">
			<div className="flex items-center gap-2 w-full text-left">
				<Bitcoin className="text-primary" size={24} />
				<div>
					<h1 className="font-bold text-2xl">Bitcoin Transaction Tracker</h1>
					<p className="text-sm text-muted-foreground">
						Real-time Bitcoin transaction via Blockchain.com by using WebSockets
						Api
					</p>
				</div>
			</div>
			<StatusConnection isConnected={false} />
		</CardBase>
	);
};

export default CardTracker;
