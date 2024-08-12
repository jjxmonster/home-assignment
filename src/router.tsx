import { createBrowserRouter } from "react-router-dom";
import { Board } from "./components/board/Board";
import { App } from "./App";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				id: "board",
				path: "/board",
				index: true,
				element: <Board />,
			},
		],
	},
]);
