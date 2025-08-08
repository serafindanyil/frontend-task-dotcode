"use client";

import { useState } from "react";
import Link from "next/link";

import { PanelsLeftBottom } from "lucide-react";

import HeaderNav from "./header-nav";
import CardBase from "../card/card-base";

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleBurgerMenuButtonClick = () => {
		setIsActive((prev) => !prev);
	};

	return (
		<header className="text-white mb-6">
			<CardBase className="justify-between">
				<Link href="/" className="flex items-center">
					<PanelsLeftBottom className="text-primary mr-2" size={24} />
					<span className="text-xl font-bold">Crypto SPA</span>
				</Link>
				<HeaderNav />
			</CardBase>
		</header>
	);
};

export default Header;
