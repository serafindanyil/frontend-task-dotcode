import type { TButtonProps } from "@/types/TButton";

import "./button.scss";

const Button = ({
	children,
	className = "",
	variant = "solid",
	...props
}: TButtonProps) => {
	return (
		<button className={`button button--${variant} ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
