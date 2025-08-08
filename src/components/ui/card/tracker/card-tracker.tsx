"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

import { Bitcoin } from "lucide-react";

import CardBase from "../card-base";
import StatusConnection from "../status/status-connection";

const CardTracker = () => {
	const { isListening } = useSelector((state: RootState) => state.bitcoin);

	return (
		<CardBase className="flex flex-col md:flex-row items-center justify-between gap-2">
			<div className="flex items-center gap-4 w-full text-left order-1 md:order-none">
				<Bitcoin className="text-primary shrink-0" size={24} />
				<div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
					<div className="order-1 md:order-none">
						<h1 className="font-bold text-2xl mb-1">
							Bitcoin Transaction Tracker
						</h1>
						<p className="text-sm text-muted-foreground">
							Real-time Bitcoin transaction via Blockchain.com by using
							WebSockets Api
						</p>
					</div>
					<StatusConnection
						isConnected={isListening}
						className="self-start order-0 md:order-none md:self-center"
					/>
				</div>
			</div>
		</CardBase>
	);
};

export default CardTracker;
