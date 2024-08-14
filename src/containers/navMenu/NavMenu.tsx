import { NavItem } from "../../components/navItem/NavItem";
import { menuItems } from "../../utils/constants";
import "./NavMenu.scss";

export const NavMenu = () => {
	return (
		<nav className="nav-menu">
			{menuItems.map((item, index) => {
				const Icon = item.icon;
				return (
					<NavItem
						key={index}
						icon={<Icon />}
						title={item.title}
						to={item.to}
					/>
				);
			})}
		</nav>
	);
};
