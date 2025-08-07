type CardBaseProps = {
	children: React.ReactNode;
	className?: string;
};

const CardBase = ({ children, className }: CardBaseProps) => {
	return (
		<div
			className={`flex items-center p-4 bg-blur-xl bg-background-tertiary border border-border rounded ${className}`}>
			{children}
		</div>
	);
};
export default CardBase;
