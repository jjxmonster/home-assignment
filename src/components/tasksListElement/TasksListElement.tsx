import { TaskInterface } from "../../store/types";
import { TaskCard } from "../taskCard/TaskCard";
import "./TasksListElement.scss";

interface TaskCardProps {
	task: TaskInterface;
}
export const TasksListElement = ({ task }: TaskCardProps) => {
	return (
		<li className="tasks-list-element">
			<TaskCard task={task} />
			<ul>
				{task.subTasks.map(subTask => (
					<TasksListElement key={subTask.id} task={subTask} />
				))}
			</ul>
		</li>
	);
};
