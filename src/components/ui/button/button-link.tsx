import Link from "next/link";

import { TButtonProps } from "@/types/TButton";

import Button from "./button";

type ButtonLinkProps = TButtonProps & {
	href: string;
};

const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => {
	return (
		<Link href={href}>
			<Button {...props}>{children}</Button>
		</Link>
	);
};

export default ButtonLink;
