import CardTracker from "@/app/card/tracker/card-tracker";
import CardControlPanel from "@/app/card/control-panel/card-control-panel";
import CardTotalVolume from "@/app/card/total-volume/card-total-volume";
import CardTransactionCount from "@/app/card/transaction-count/card-transaction-count";
import CardLiveTransaction from "@/app/card/live-transaction/card-live-transaction";

const TrackerPage = () => {
	return (
		<main className="w-full space-y-6">
			<CardTracker />
			<CardControlPanel />
			<div className="flex flex-col xl:flex-row gap-6 ">
				<CardTotalVolume />
				<CardTransactionCount />
			</div>
			<CardLiveTransaction />
		</main>
	);
};

export default TrackerPage;
