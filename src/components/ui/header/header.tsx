"use client";

import { Bitcoin, Grid } from "lucide-react";
import ButtonLink from "@/components/ui/button/button-link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	const isActivePage = (page: string) => {
		return pathname === page ? "solid" : "outline";
	};

	return (
		<header className="flex items-center justify-between p-4 bg-blur-xl bg-background-tertiary border border-border text-white rounded">
			<div className="flex items-center">
				<Bitcoin className="text-primary mr-2" size={24} />
				<span className="text-xl font-bold">Crypto SPA</span>
			</div>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<ButtonLink
							href={"/interactive-workspace"}
							variant={isActivePage("/interactive-workspace")}
							className="text-white">
							<Grid className="" size={16} />
							<span>Interactive Workspace</span>
						</ButtonLink>
					</li>
					<li>
						<ButtonLink
							href={"/bitcoin-tracker"}
							variant={isActivePage("/bitcoin-tracker")}
							className="text-white">
							<Bitcoin size={16} />
							<span>Bitcoin Tracker</span>
						</ButtonLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
