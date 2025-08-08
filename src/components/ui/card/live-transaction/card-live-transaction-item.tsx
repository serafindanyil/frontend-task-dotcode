import React from "react";

import type { TBitcoinTransactionItem } from "@/types/TBitcoinTransactionItem";

import validationUnixTime from "@/utils/validationUnixTime";

import satoshiToBTC from "@/utils/satoshiToBTC";

import { Bitcoin, Calendar } from "lucide-react";

import CardBase from "../card-base";

const CardLiveTransactionItem = ({
	item,
	isLatest = false,
}: {
	item: TBitcoinTransactionItem;
	isLatest: boolean;
}) => {
	return (
		<CardBase
			className="flex justify-between w-full"
			variant={isLatest ? "accent" : "default"}>
			<div className="space-y-3 w-full">
				<div className="flex flex-col gap-3 sm:gap-0 sm:flex-row items-start sm:items-center justify-between w-full">
					<div className="flex gap-2 items-center text-muted-foreground">
						<Calendar size={14} />
						<span className="font-medium text-xs mr-2">
							{validationUnixTime(item.timestamp)}
						</span>
						{isLatest && (
							<span className="text-accent text-xs px-2 py-1 bg-accent/15 rounded-3xl">
								Latest
							</span>
						)}
					</div>
					<div className="flex text items-center text-ring">
						<Bitcoin
							className="-ml-1 sm:-ml-0"
							style={{ transform: "rotate(-10deg)" }}
							size={24}
						/>
						<span className="font-semibold text-xl">
							{satoshiToBTC(item.valueSatoshis)}
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between w-full">
					<span className="font-semibold text-sm text-muted-foreground">
						From:
					</span>
					<span className="text-sm inline-block max-w-[14rem] truncate align-middle">
						{item.sender}
					</span>
				</div>
				<div className="flex items-center justify-between w-full">
					<span className="font-semibold text-sm text-muted-foreground">
						To:
					</span>
					<span className="text-sm inline-block max-w-[14rem] truncate align-middle">
						{item.receiver}
					</span>
				</div>
			</div>
		</CardBase>
	);
};

export default React.memo(CardLiveTransactionItem);
