import { AddTaskButton } from "../../containers/addTaskButton/AddTaskButton";
import { TasksList } from "../../containers/tasksList/TasksList";
import "./Board.scss";
export const Board = () => {
	return (
		<div className="board">
			<TasksList />
			<AddTaskButton />
		</div>
	);
};
