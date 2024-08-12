import { TaskCard } from "../../components/taskCard/TaskCard";
import { useAppSelector } from "../../hooks/rtk";
import { AddTaskButton } from "../addTaskButton/AddTaskButton";

export const TasksList = () => {
	const tasks = useAppSelector(state => state.board.tasks);

	if (tasks.length === 0) {
		return <AddTaskButton />;
	}

	return (
		<ul>
			{tasks.map(task => (
				<TaskCard key={task.id} task={task} />
			))}
		</ul>
	);
};
