import "./WorkspacesSidebar.scss";
import { UserProfile } from "../userProfile";
import { WorkspaceSettings } from "../workspaceSettings";
import { Hamburger } from "../hamburger/Hamburger";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavMenu } from "../../containers/navMenu/NavMenu";
import { useLocation } from "react-router-dom";

export const WorkspacesSidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const handleToggle = () => {
		setIsOpen(prevState => !prevState);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<>
			<div
				className={clsx("workspaces", {
					"workspaces-open": isOpen,
					"workspaces-closed": !isOpen,
				})}
			>
				<div className="workspaces-header"></div>
				<div className="workspaces-main">
					<NavMenu />
				</div>
				<div className="workspaces-footer">
					<UserProfile />
					<WorkspaceSettings />
				</div>
			</div>
			<Hamburger onClick={handleToggle} />
		</>
	);
};
