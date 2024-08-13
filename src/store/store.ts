import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import {
	loadStateFromLocalStorage,
	saveStateToLocalStorage,
} from "../utils/saveState";

const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
	reducer: {
		board: boardReducer,
	},
	preloadedState,
});

store.subscribe(() => {
	saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
