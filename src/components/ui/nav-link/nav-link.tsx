const NavLink = ({
	href,
	children,
	className = "",
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<a href={href} className={`text-blue-500 hover:underline ${className}`}>
			{children}
		</a>
	);
};

export default NavLink;
