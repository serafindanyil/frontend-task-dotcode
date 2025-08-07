import CardBase from "@/app/card/card-base";
import CardLiveTransactionFallback from "@/app/card/live-transaction/card-live-transaction-fallback";

const CardLiveTransaction = ({ content }: { content?: null }) => {
	return (
		<CardBase innerPadding={false} className="flex-col justify-start w-full">
			<div className="w-full py-4 px-5 border-b border-border">
				<h3 className="font-semibold text-base">Live Transaction Feed</h3>
				<p className="text-sm text-muted-foreground">
					Real-time Bitcoin transaction from the network
				</p>
			</div>
			<div className="flex items-center justify-center w-full min-h-[28rem]">
				{content ?? <CardLiveTransactionFallback />}
			</div>
		</CardBase>
	);
};

export default CardLiveTransaction;
