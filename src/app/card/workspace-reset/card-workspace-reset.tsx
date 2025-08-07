import CardBase from "../card-base";
import { Grid } from "lucide-react";
import ButtonReset from "@/components/ui/button/reset/button-reset";

const CardWorkspaceReset = () => {
	return (
		<CardBase className="flex flex-col md:flex-row items-center justify-between gap-2">
			<div className="flex items-center gap-4 w-full text-left">
				<Grid className="text-primary shrink-0" size={24} />
				<div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
					<div>
						<h1 className="font-bold text-2xl mb-1">Interactive Workspace</h1>
						<p className="text-sm text-muted-foreground">
							Drag, resize, and manage blocks with persistant state
						</p>
					</div>
					<ButtonReset className="self-end md:self-center h-fit" />
				</div>
			</div>
		</CardBase>
	);
};

export default CardWorkspaceReset;
