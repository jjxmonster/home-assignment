import { RootState } from "../store/store";

export const saveStateToLocalStorage = (state: RootState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("boardState", serializedState);
	} catch (error) {
		console.error("Could not save state", error);
	}
};

export const loadStateFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem("boardState");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error("Could not load state", error);
		return undefined;
	}
};
