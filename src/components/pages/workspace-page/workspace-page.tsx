import CardWorkspaceReset from "@/components/ui/card/workspace-reset/card-workspace-reset";
import CardWorkspaceInfo from "@/components/ui/card/workspace-info/card-workspace-info";
import CardWorkspace from "@/components/ui/card/workspace/card-workspace";

const WorkspacePage = () => {
	return (
		<main className="w-full space-y-6 pb-4">
			<CardWorkspaceReset />
			<CardWorkspaceInfo />
			<CardWorkspace />
		</main>
	);
};

export default WorkspacePage;
