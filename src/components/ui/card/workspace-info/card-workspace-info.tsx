"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CardBase from "../card-base";

const CardWorkspaceInfo = () => {
	const { blocks } = useSelector((state: RootState) => state.workspace);

	const activeBlocks = blocks.filter((b) => b.visible).length;
	const deletedBlocks = blocks.filter((b) => !b.visible).length;
	const totalBlocks = blocks.length;

	return (
		<CardBase className="flex flex-col md:flex-row items-center justify-around gap-6 p-4">
			<div>
				<span className="text-base text-muted-foreground mr-2">
					Active Blocks:
				</span>
				<span className="font-bold text-base">{activeBlocks}</span>
			</div>

			<div>
				<span className="text-base text-muted-foreground mr-2">
					Deleted Blocks:
				</span>
				<span className="font-bold text-base text-red-600">
					{deletedBlocks}
				</span>
			</div>

			<div>
				<span className="text-base text-muted-foreground mr-2">
					Total Blocks:
				</span>
				<span className="font-bold text-base">{totalBlocks}</span>
			</div>
		</CardBase>
	);
};

export default CardWorkspaceInfo;
