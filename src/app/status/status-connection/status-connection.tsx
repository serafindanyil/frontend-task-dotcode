import { Wifi, WifiOff } from "lucide-react";

const StatusConnection = ({ isConnected }: { isConnected: boolean }) => {
	const Tag = isConnected ? Wifi : WifiOff;
	return (
		<div className="flex items-center justify-center h-full">
			<Tag className="text-muted-foreground mr-2" size={16} />
			<span className="text-sm text-muted-foreground">
				{isConnected ? "Connected" : "Disconnected"}
			</span>
		</div>
	);
};

export default StatusConnection;
