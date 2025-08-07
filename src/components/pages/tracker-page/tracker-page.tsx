import CardTracker from "@/app/card/tracker/card-tracker";

const TrackerPage = () => {
	return (
		<main className="w-full space-y-6">
			<h1 className="text-2xl font-bold">Welcome to bitcoin tracker</h1>
			<CardTracker />
		</main>
	);
};

export default TrackerPage;
