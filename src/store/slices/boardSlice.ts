import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardInterface, TaskInterface } from "../types";
import {
	addNewTask,
	deleteTaskById,
	updateTaskById,
} from "../../utils/boardStoreActions";

const initialState: BoardInterface = {
	tasks: [],
};

const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		addTask: (
			state,
			action: PayloadAction<{
				title: string;
				parentTaskId?: string;
				taskId: string;
			}>
		) => {
			const { title, parentTaskId, taskId } = action.payload;

			const newTask: TaskInterface = {
				id: taskId,
				title,
				subTasks: [],
			};

			state.tasks = addNewTask(state.tasks, newTask, parentTaskId);
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = deleteTaskById(state.tasks, action.payload);
		},
		editTask: (
			state,
			action: PayloadAction<{ taskId: string; newTitle: string }>
		) => {
			const { taskId, newTitle } = action.payload;
			state.tasks = updateTaskById(state.tasks, taskId, {
				title: newTitle,
			});
		},
	},
});

export const { addTask, deleteTask, editTask } = boardSlice.actions;

export default boardSlice.reducer;
