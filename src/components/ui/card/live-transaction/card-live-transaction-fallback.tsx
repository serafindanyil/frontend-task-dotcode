import { Bitcoin } from "lucide-react";

const CardLiveTransactionFallback = () => {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center">
			<Bitcoin className="text-muted-foreground mb-6" size={32} />
			<h4 className="text-lg text-muted-foreground mb-1">
				No transactions yet
			</h4>
			<p className="text-sm text-muted-foreground">
				Click "Start" to begin tracking live transations
			</p>
		</div>
	);
};

export default CardLiveTransactionFallback;
