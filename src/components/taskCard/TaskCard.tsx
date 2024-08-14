import { useEffect, useState } from "react";
import { AddTaskButton } from "../../containers/addTaskButton/AddTaskButton";
import { TaskActions } from "../../containers/taskActions/TaskActions";
import { TaskInput } from "../../containers/taskInput/TaskInput";
import { TaskInterface } from "../../store/types";
import "./TaskCard.scss";
import { TaskCompletedNotification } from "../taskCompletedNotification/TaskCompletedNotification";

interface TaskCardProps {
	task: TaskInterface;
}
export const TaskCard = ({ task }: TaskCardProps) => {
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		if (task.title) {
			setIsDisabled(true);
		}
	}, [task]);

	return (
		<div id={`task-card-${task.id}`} className="task-card">
			<div className="task-card-input">
				<TaskInput disabled={isDisabled} taskData={task} />
				{task.title && (
					<TaskActions setIsDisabled={setIsDisabled} taskId={task.id} />
				)}
			</div>
			{task.title && (
				<div className="task-card-button">
					<AddTaskButton parentId={task.id} />
				</div>
			)}
			<TaskCompletedNotification />
		</div>
	);
};
