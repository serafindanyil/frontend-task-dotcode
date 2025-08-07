"use client";

import { useState } from "react";

import CardBase from "../card-base";

import ButtonToggle from "@/components/ui/button/toggle/button-toggle";
import ButtonReset from "@/components/ui/button/reset/button-reset";

const CardControlPanel = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<CardBase className="flex items-center gap-4">
			<ButtonToggle
				isActive={isActive}
				onClick={() => setIsActive(!isActive)}
			/>
			<ButtonReset />
		</CardBase>
	);
};
export default CardControlPanel;
