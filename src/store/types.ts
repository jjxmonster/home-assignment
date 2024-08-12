export interface BoardInterface {
	tasks: TaskInterface[];
}

export interface TaskInterface {
	id: string;
	title: string;
	subTasks: TaskInterface[];
}
