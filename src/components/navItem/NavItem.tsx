import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import "./NavItem.scss";

interface NavItemProps {
	icon: JSX.Element;
	title: string;
	to: string;
}

export const NavItem = ({ icon, title, to }: NavItemProps) => {
	const location = useLocation();

	const isActive = location.pathname === to;

	return (
		<Link
			to={to}
			className={clsx("nav-item", {
				"nav-item-active": isActive,
			})}
		>
			{icon}
			<span>{title}</span>
		</Link>
	);
};
