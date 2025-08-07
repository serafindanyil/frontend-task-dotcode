"use client";

import { PanelsLeftBottom, Bitcoin, Grid } from "lucide-react";
import { usePathname } from "next/navigation";

import ButtonLink from "@/components/ui/button/button-link";
import CardBase from "@/app/card/card-base";

const Header = () => {
	const pathname = usePathname();

	const isActivePage = (page: string) => {
		return pathname === page ? "solid" : "outline";
	};

	return (
		<header className="text-white mb-6">
			<CardBase className="justify-between">
				<div className="flex items-center">
					<PanelsLeftBottom className="text-primary mr-2" size={24} />
					<span className="text-xl font-bold">Crypto SPA</span>
				</div>
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
			</CardBase>
		</header>
	);
};

export default Header;
