import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TWorkspaceBlock } from "@/types/TWorkspace";

const BLOCK_COUNT = 5;
const BLOCK_WIDTH = 300;
const BLOCK_HEIGHT = 100;
const BLOCK_X_OFFSET = 150;
const BLOCK_Y_OFFSET = 100;

const initialBlocks: TWorkspaceBlock[] = Array.from(
	{ length: BLOCK_COUNT },
	(_, i) => ({
		id: i + 1,
		x: i * BLOCK_X_OFFSET,
		y: i * BLOCK_Y_OFFSET,
		width: BLOCK_WIDTH,
		height: BLOCK_HEIGHT,
		zIndex: i + 1,
		visible: true,
	})
);

interface WorkspaceState {
	blocks: TWorkspaceBlock[];
	highestZIndex: number;
}

const initialState: WorkspaceState = {
	blocks: initialBlocks,
	highestZIndex: BLOCK_COUNT,
};

const workspaceSlice = createSlice({
	name: "workspace",
	initialState,
	reducers: {
		resetWorkspace: () => initialState,
		updateBlock: (
			state,
			action: PayloadAction<{
				id: number;
				data: Partial<Pick<TWorkspaceBlock, "x" | "y" | "width" | "height">>;
			}>
		) => {
			state.blocks = state.blocks.map((block) =>
				block.id === action.payload.id
					? { ...block, ...action.payload.data }
					: block
			);
		},
		bringBlockToFront: (state, action: PayloadAction<number>) => {
			state.highestZIndex += 1;
			state.blocks = state.blocks.map((block) =>
				block.id === action.payload
					? { ...block, zIndex: state.highestZIndex }
					: block
			);
		},
		deleteBlock: (state, action: PayloadAction<number>) => {
			state.blocks = state.blocks.map((block) =>
				block.id === action.payload ? { ...block, visible: false } : block
			);
		},
	},
});

export const { resetWorkspace, updateBlock, bringBlockToFront, deleteBlock } =
	workspaceSlice.actions;

export default workspaceSlice.reducer;
