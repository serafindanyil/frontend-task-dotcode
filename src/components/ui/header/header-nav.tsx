import { Bitcoin, Grid } from "lucide-react";
import { usePathname } from "next/navigation";

import ButtonLink from "@/components/ui/button/button-link";

const HeaderNav = () => {
	const pathname = usePathname();

	const isActivePage = (page: string) => {
		return pathname === page ? "solid" : "outline";
	};
	return (
		<nav>
			<ul className="flex space-x-4">
				<li>
					<ButtonLink
						href={"/workspace"}
						variant={isActivePage("/workspace")}
						className="text-white">
						<Grid size={16} />
						<span>Interactive Workspace</span>
					</ButtonLink>
				</li>
				<li>
					<ButtonLink
						href={"/tracker"}
						variant={isActivePage("/tracker")}
						className="text-white">
						<Bitcoin size={16} />
						<span>Bitcoin Tracker</span>
					</ButtonLink>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNav;
