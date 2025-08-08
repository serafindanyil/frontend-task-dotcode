"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	connectBitcoinStream,
	disconnectBitcoinStream,
	restartBitcoinStream,
} from "@/store/features/bitcoin/bitcoin-ws-service";

import type { AppDispatch } from "@/store/store";

import { throttle } from "@/utils/throttle";

import CardBase from "../card-base";

import ButtonToggle from "@/components/ui/button/toggle/button-toggle";
import ButtonReset from "@/components/ui/button/reset/button-reset";

const THROTTLE_LATENCY: number = 200;

const CardControlPanel = () => {
	const [isActive, setIsActive] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	const handleButtonToggle = throttle(() => {
		if (isActive) {
			dispatch(disconnectBitcoinStream());
			setIsActive((prev) => !prev);
		} else {
			dispatch(connectBitcoinStream());
			setIsActive((prev) => !prev);
		}
	}, THROTTLE_LATENCY);

	const handleButtonReset = throttle(() => {
		dispatch(restartBitcoinStream());
	}, THROTTLE_LATENCY);

	return (
		<CardBase className="flex items-center justify-between md:justify-normal gap-4">
			<ButtonToggle isActive={isActive} onClick={handleButtonToggle} />
			<ButtonReset onClick={handleButtonReset} />
		</CardBase>
	);
};
export default CardControlPanel;
