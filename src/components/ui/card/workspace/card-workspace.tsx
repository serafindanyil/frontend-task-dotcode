"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetWorkspace } from "@/store/features/workspace/workspace-slice";
import { RootState } from "@/store/store";
import CardBase from "../card-base";
import CardWorkspaceBlock from "./card-workspace-block";

const DRAG_GRID_SIZE: [number, number] = [10, 10];
const RESIZE_GRID_SIZE: [number, number] = [10, 10];

const Workspace: React.FC = () => {
	const dispatch = useDispatch();
	const { blocks } = useSelector((state: RootState) => state.workspace);

	return (
		<CardBase className="w-full h-screen relative">
			{blocks.map(
				(block) =>
					block.visible && (
						<CardWorkspaceBlock
							key={block.id}
							block={block}
							dragGrid={DRAG_GRID_SIZE}
							resizeGrid={RESIZE_GRID_SIZE}
						/>
					)
			)}
		</CardBase>
	);
};

export default Workspace;
