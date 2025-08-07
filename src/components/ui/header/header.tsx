"use client";

import { PanelsLeftBottom } from "lucide-react";

import CardBase from "@/app/card/card-base";
import HeaderNav from "@/components/ui/header/header-nav";

const Header = () => {
	return (
		<header className="text-white mb-6">
			<CardBase className="justify-between">
				<div className="flex items-center">
					<PanelsLeftBottom className="text-primary mr-2" size={24} />
					<span className="text-xl font-bold">Crypto SPA</span>
				</div>
				<HeaderNav />
			</CardBase>
		</header>
	);
};

export default Header;
