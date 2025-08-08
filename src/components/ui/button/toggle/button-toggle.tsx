import { TButtonProps } from "@/types/TButton";

import { Play, Square } from "lucide-react";
import Button from "../button";

type ButtonLinkProps = TButtonProps & {
	isActive?: boolean;
};

const ButtonLink = ({ isActive, ...props }: ButtonLinkProps) => {
	const Tag = isActive ? Square : Play;
	const currentStatus = isActive ? "Stop" : "Start";
	return (
		<Button
			variant={isActive ? "error" : "solid"}
			className="min-w-[6rem]"
			{...props}>
			<Tag className="fill-white" size={16} />
			<span>{currentStatus}</span>
		</Button>
	);
};

export default ButtonLink;
