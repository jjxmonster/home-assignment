import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardInterface, TaskInterface } from "../types";
import { addNewTask, deleteTaskById, updateTaskById } from "../../utils/utils";

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
			}>
		) => {
			console.log(action.payload);
			const { title, parentTaskId } = action.payload;
			const taskId = crypto.randomUUID();

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

export const { addTask, deleteTask } = boardSlice.actions;

export default boardSlice.reducer;
