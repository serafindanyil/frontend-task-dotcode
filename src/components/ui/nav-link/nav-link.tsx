import Link from "next/link";


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
		<Link href={href} className={`text-blue-500 hover:underline ${className}`}>
			{children}
		</Link>
	);
};

export default NavLink;
