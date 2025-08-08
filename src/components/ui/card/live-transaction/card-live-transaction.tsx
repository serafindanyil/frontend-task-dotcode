"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

import CardBase from "@/components/ui/card/card-base";
import CardLiveTransactionFallback from "@/components/ui/card/live-transaction/card-live-transaction-fallback";
import CardLiveTransactionItem from "@/components/ui/card/live-transaction/card-live-transaction-item";

const CardLiveTransaction = () => {
	const { transactions } = useSelector((state: RootState) => state.bitcoin);
	return (
		<CardBase
			variant="no-inner-padding"
			className="flex-col justify-start w-full h-full">
			<div className="w-full py-4 px-5 border-b border-border">
				<h3 className="font-semibold text-base">Live Transaction Feed</h3>
				<p className="text-sm text-muted-foreground">
					Real-time Bitcoin transaction from the network
				</p>
			</div>

			<div className="flex flex-col items-center justify-start w-full h-[50vh] p-3 gap-2 overflow-y-auto ">
				{/* {!!!transactions.length && <CardLiveTransactionFallback />} */}
				{transactions.map((item, index) => (
					<CardLiveTransactionItem
						key={item.hash}
						item={item}
						isLatest={index === 0}
					/>
				))}
			</div>
		</CardBase>
	);
};

export default CardLiveTransaction;
