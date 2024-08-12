import { useAppDispatch } from "../../hooks/rtk";
import { addTask } from "../../store/slices";

export const AddTaskButton = () => {
	const dispatch = useAppDispatch();

	const handleAddTask = () => {
		dispatch(
			addTask({
				title: "New Task",
			})
		);
	};
	return <button onClick={handleAddTask}>Add Task Button</button>;
};
