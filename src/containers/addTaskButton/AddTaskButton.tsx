import clsx from "clsx";
import { useAppDispatch } from "../../hooks/rtk";
import { addTask } from "../../store/slices";
import "./AddTaskButton.scss";
import { Add } from "../../assets/icons";

interface AddTaskButtonProps {
	parentId?: string;
}

export const AddTaskButton = ({ parentId }: AddTaskButtonProps) => {
	const dispatch = useAppDispatch();

	const handleAddTask = () => {
		const newTaskId = crypto.randomUUID();
		dispatch(addTask({ taskId: newTaskId, title: "", parentTaskId: parentId }));
	};
	return (
		<button
			className={clsx("add-task-button", {
				"hidden-button": parentId !== undefined,
			})}
			type="button"
			onClick={handleAddTask}
		>
			<Add /> Add a card
		</button>
	);
};
