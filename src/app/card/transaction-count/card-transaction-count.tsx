"use client";

import { useState } from "react";

import { Activity } from "lucide-react";

import CardBase from "../card-base";

const CardTransactionCount = () => {
	const [count, setCount] = useState(0);

	return (
		<CardBase className="w-full">
			<div className="flex flex-col">
				<div className="flex items-center gap-2 mb-4">
					<Activity className="text-primary" size={20} />
					<h2 className="text-base font-semibold">Transactions Count</h2>
				</div>
				<div className="flex items-center mb-3">
					<h3 className="text-3xl font-bold">{count}</h3>
				</div>

				<p className="text-sm text-muted-foreground mb-1">
					Live transaction count on the Bitcoin network
				</p>
			</div>
		</CardBase>
	);
};

export default CardTransactionCount;
