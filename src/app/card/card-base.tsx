type CardBaseProps = {
	children: React.ReactNode;
	innerPadding?: boolean;
	className?: string;
};

const CardBase = ({
	children,
	innerPadding = true,
	className,
}: CardBaseProps) => {
	return (
		<div
			className={`flex items-center ${
				innerPadding ? "py-4 px-5" : ""
			} bg-blur-xl bg-background-tertiary border border-border rounded ${className}`}>
			{children}
		</div>
	);
};
export default CardBase;
