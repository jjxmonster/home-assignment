import { TasksListElement } from "../../components/tasksListElement/TasksListElement";
import { useAppSelector } from "../../hooks/rtk";
import "./TasksList.scss";

export const TasksList = () => {
	const tasks = useAppSelector(state => state.board.tasks);

	return (
		<ul className="tasks-list">
			{tasks.map(task => (
				<TasksListElement key={task.id} task={task} />
			))}
		</ul>
	);
};
