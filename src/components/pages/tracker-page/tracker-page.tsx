import CardTracker from "@/components/ui/card/tracker/card-tracker";
import CardControlPanel from "@/components/ui/card/control-panel/card-control-panel";
import CardTotalVolume from "@/components/ui/card/total-volume/card-total-volume";
import CardTransactionCount from "@/components/ui/card/transaction-count/card-transaction-count";
import CardLiveTransaction from "@/components/ui/card/live-transaction/card-live-transaction";

const TrackerPage = () => {
	return (
		<main className="w-full h-full space-y-6 pb-4">
			<CardTracker />
			<CardControlPanel />
			<div className="flex flex-col md:flex-row gap-6 ">
				<CardTotalVolume />
				<CardTransactionCount />
			</div>
			<CardLiveTransaction />
		</main>
	);
};

export default TrackerPage;
