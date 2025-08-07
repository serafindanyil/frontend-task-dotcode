import "./card-base.scss";

type CardBaseProps = {
	children: React.ReactNode;
	variant?: "default" | "no-inner-padding";
	innerPadding?: boolean;
	className?: string;
};

const CardBase = ({
	children,
	variant = "default",
	className,
}: CardBaseProps) => {
	return (
		<div className={`card-base card-base--${variant} ${className}`}>
			{children}
		</div>
	);
};
export default CardBase;
