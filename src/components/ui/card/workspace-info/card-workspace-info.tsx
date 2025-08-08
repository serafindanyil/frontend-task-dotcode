import CardBase from "../card-base";

const CardWorkspaceInfo = () => {
	return (
		<CardBase className="flex flex-col md:flex-row items-center justify-between gap-2">
			<div>
				<span className="text-base text-muted-foreground mr-2">
					Active Blocks:
				</span>
				<span className="font-bold text-base">0</span>
			</div>
		</CardBase>
	);
};

export default CardWorkspaceInfo;
