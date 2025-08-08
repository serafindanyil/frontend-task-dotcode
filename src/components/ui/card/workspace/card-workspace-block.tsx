"use client";

import React from "react";
import { Rnd, DraggableData, RndResizeCallback } from "react-rnd";
import { useDispatch } from "react-redux";
import {
	updateBlock,
	bringBlockToFront,
	deleteBlock,
} from "@/store/features/workspace/workspace-slice";

import type { TWorkspaceBlock } from "@/types/TWorkspace";

import { Move, X } from "lucide-react";

interface WorkspaceBlockProps {
	block: TWorkspaceBlock;
	dragGrid?: [number, number];
	resizeGrid?: [number, number];
}

const DEFAULT_GRID: [number, number] = [10, 10];

const CardWorkspaceBlock: React.FC<WorkspaceBlockProps> = ({
	block,
	dragGrid = DEFAULT_GRID,
	resizeGrid = DEFAULT_GRID,
}) => {
	const dispatch = useDispatch();

	const handleDragStop = (_event: any, data: DraggableData) => {
		dispatch(updateBlock({ id: block.id, data: { x: data.x, y: data.y } }));
	};

	const handleResizeStop: RndResizeCallback = (
		_event,
		_direction,
		ref,
		_delta,
		position
	) => {
		dispatch(
			updateBlock({
				id: block.id,
				data: {
					width: parseFloat(ref.style.width),
					height: parseFloat(ref.style.height),
					x: position.x,
					y: position.y,
				},
			})
		);
	};

	return (
		<Rnd
			size={{ width: block.width, height: block.height }}
			position={{ x: block.x, y: block.y }}
			onDragStop={handleDragStop}
			onResizeStop={handleResizeStop}
			dragGrid={dragGrid}
			resizeGrid={resizeGrid}
			bounds="parent"
			style={{ zIndex: block.zIndex }}
			onMouseDown={() => dispatch(bringBlockToFront(block.id))}
			dragHandleClassName="drag-handle"
			enableResizing={{
				top: true,
				right: true,
				bottom: true,
				left: true,
				topRight: true,
				bottomRight: true,
				bottomLeft: true,
				topLeft: true,
			}}>
			<div className="relative w-full h-full border border-accent backdrop-blur-sm rounded">
				<div className="absolute top-1 left-1">
					<button className="drag-handle p-1 rounded text-sm cursor-move mb-3 text-muted-foreground hover:text-white duration-300 ease-in-out">
						<Move size={20} />
					</button>
				</div>
				<div className="absolute top-2 right-2">
					<button
						className="rounded-full bg-destructive hover:bg-red-700 p-1 transition"
						onClick={() => dispatch(deleteBlock(block.id))}>
						<X className="text-white" size={16} />
					</button>
				</div>
			</div>
		</Rnd>
	);
};

export default CardWorkspaceBlock;
