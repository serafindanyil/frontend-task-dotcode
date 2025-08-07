import { Wifi, WifiOff } from "lucide-react";

type StatusConnectionProps = {
	isConnected: boolean;
	className?: string;
};

const StatusConnection = ({
	isConnected,
	className,
}: StatusConnectionProps) => {
	const Tag = isConnected ? Wifi : WifiOff;
	return (
		<div className={`flex items-center justify-center h-full ${className}`}>
			<Tag className="text-muted-foreground mr-2" size={16} />
			<span className="text-sm text-muted-foreground">
				{isConnected ? "Connected" : "Disconnected"}
			</span>
		</div>
	);
};

export default StatusConnection;
