"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

import satoshiToBTC from "@/utils/satoshiToBTC";

import { Bitcoin, TrendingUp } from "lucide-react";

import CardBase from "../card-base";

const CardTotalVolume = () => {
	const { totalBTCTransferred } = useSelector(
		(state: RootState) => state.bitcoin
	);

	return (
		<CardBase className="w-full">
			<div className="flex flex-col">
				<div className="flex items-center gap-2 mb-4">
					<TrendingUp className="text-primary" size={20} />
					<h2 className="text-base font-semibold">Total Volume</h2>
				</div>
				<div className="flex items-center mb-3 -ml-2">
					<Bitcoin style={{ transform: "rotate(-10deg)" }} size={36} />
					<h3 className="text-3xl font-bold">
						{satoshiToBTC(totalBTCTransferred)}
					</h3>
				</div>

				<p className="text-sm text-muted-foreground mb-1">
					Sum of all recieved transactions
				</p>
			</div>
		</CardBase>
	);
};

export default CardTotalVolume;
