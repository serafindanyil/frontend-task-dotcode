import CardTracker from "@/app/card/tracker/card-tracker";
import CardControlPanel from "@/app/card/control-panel/card-control-panel";

const TrackerPage = () => {
	return (
		<main className="w-full space-y-6">
			<h1 className="text-2xl font-bold">Welcome to bitcoin tracker</h1>
			<CardTracker />
			<CardControlPanel />
		</main>
	);
};

export default TrackerPage;
