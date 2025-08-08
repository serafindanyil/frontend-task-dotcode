import { Wifi, WifiOff } from "lucide-react";
import "./status-connection.scss";

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
		<div className={`status-connection ${className}`}>
			<Tag
				className={`status-connection__icon is-connected--${isConnected}`}
				size={16}
			/>
			<span
				className={`status-connection__status is-connected--${isConnected}`}>
				{isConnected ? "Connected" : "Disconnected"}
			</span>
		</div>
	);
};

export default StatusConnection;
