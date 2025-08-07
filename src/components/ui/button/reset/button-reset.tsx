import { TButtonProps } from "@/types/TButton";

import { RotateCcw } from "lucide-react";
import Button from "../button";

const ButtonReset = (props: TButtonProps) => {
	return (
		<Button variant="outline" {...props}>
			<RotateCcw className="mr-2" size={16} />
			<span>Reset</span>
		</Button>
	);
};

export default ButtonReset;
