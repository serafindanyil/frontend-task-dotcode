"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	connectBitcoinStream,
	disconnectBitcoinStream,
	restartBitcoinStream,
} from "@/store/features/bitcoin/bitcoin-ws-service";

import type { AppDispatch } from "@/store/store";

import CardBase from "../card-base";

import ButtonToggle from "@/components/ui/button/toggle/button-toggle";
import ButtonReset from "@/components/ui/button/reset/button-reset";

const CardControlPanel = () => {
	const [isActive, setIsActive] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	const handleButtonToggle = () => {
		if (isActive) {
			dispatch(disconnectBitcoinStream());
			setIsActive((prev) => !prev);
		} else {
			dispatch(connectBitcoinStream());
			setIsActive((prev) => !prev);
		}
	};

	const handleButtonReset = () => {
		dispatch(restartBitcoinStream());
	};

	return (
		<CardBase className="flex items-center justify-between md:justify-normal gap-4">
			<ButtonToggle isActive={isActive} onClick={handleButtonToggle} />
			<ButtonReset onClick={handleButtonReset} />
		</CardBase>
	);
};
export default CardControlPanel;
