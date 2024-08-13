import { Delete } from "../../assets/icons/Delete";
import { Edit } from "../../assets/icons/Edit";
import { useAppDispatch } from "../../hooks/rtk";
import { deleteTask } from "../../store/slices";
import "./TasksActions.scss";
interface TasksActionsProps {
	setIsDisabled: (value: boolean) => void;
	taskId: string;
}

export const TaskActions = ({ setIsDisabled, taskId }: TasksActionsProps) => {
	const dispatch = useAppDispatch();

	const handleEdit = () => {
		setIsDisabled(false);
	};
	const handleDelete = () => {
		document
			.getElementById(`task-card-${taskId}`)!
			.classList.add("task-card-completed");

		setTimeout(() => {
			dispatch(deleteTask(taskId));
		}, 800);
	};
	return (
		<div className="task-actions">
			<button className="task-actions-button" onClick={handleEdit}>
				<Edit />
			</button>
			<button className="task-actions-button" onClick={handleDelete}>
				<Delete />
			</button>
		</div>
	);
};
