import { Bitcoin, Grid } from "lucide-react";
import { usePathname } from "next/navigation";

import ButtonLink from "@/components/ui/button/button-link";
import "./header-nav.scss";

const HeaderNav = ({ ...props }) => {
	const pathname = usePathname();

	const isActivePage = (page: string) => pathname === page;

	return (
		<nav {...props}>
			<ul className="header-nav__list">
				<li className="header-nav__item">
					<ButtonLink
						href="/workspace"
						variant={isActivePage("/workspace") ? "solid" : "outline"}
						className="header-nav__link">
						<Grid size={16} />
						<span
							className={`header-nav__name  header-nav__name--${
								isActivePage("/workspace") ? "hidden" : "block"
							}`}>
							Interactive Workspace
						</span>
					</ButtonLink>
				</li>
				<li className="header-nav__item">
					<ButtonLink
						href="/tracker"
						variant={isActivePage("/tracker") ? "solid" : "outline"}
						className="header-nav__link">
						<Bitcoin size={16} />
						<span
							className={`header-nav__name  header-nav__name--${
								isActivePage("/tracker") ? "hidden" : "block"
							}`}>
							Bitcoin Tracker
						</span>
					</ButtonLink>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNav;
