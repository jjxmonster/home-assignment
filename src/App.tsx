import { Outlet } from "react-router-dom";
import "./App.scss";
import { WorkspacesSidebar } from "./components/workspacesSidebar";

export const App = () => {
	return (
		<div className="container">
			<WorkspacesSidebar />
			<Outlet />
		</div>
	);
};
