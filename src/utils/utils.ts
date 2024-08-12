import { TaskInterface } from "../store/types";

export const findTaskById = (
	tasks: TaskInterface[],
	id: string
): TaskInterface | null => {
	for (const task of tasks) {
		if (task.id === id) {
			return task;
		}
		const found = findTaskById(task.subTasks, id);
		if (found) {
			return found;
		}
	}
	return null;
};

export const updateTaskById = (
	tasks: TaskInterface[],
	id: string,
	updatedTask: Partial<TaskInterface>
): TaskInterface[] => {
	return tasks.map(task => {
		if (task.id === id) {
			return {
				...task,
				...updatedTask,
			};
		}
		return {
			...task,
			subTasks: updateTaskById(task.subTasks, id, updatedTask),
		};
	});
};

export const deleteTaskById = (
	tasks: TaskInterface[],
	id: string
): TaskInterface[] => {
	return tasks
		.filter(task => task.id !== id)
		.map(task => ({
			...task,
			subTasks: deleteTaskById(task.subTasks, id),
		}));
};

export const addNewTask = (
	tasks: TaskInterface[],
	newTask: TaskInterface,
	parentTaskId?: string
): TaskInterface[] => {
	if (!parentTaskId) {
		return [...tasks, newTask];
	}

	return tasks.map(task => {
		if (task.id === parentTaskId) {
			return {
				...task,
				subTasks: [...task.subTasks, newTask],
			};
		}
		return {
			...task,
			subTasks: addNewTask(task.subTasks, newTask, parentTaskId),
		};
	});
};
