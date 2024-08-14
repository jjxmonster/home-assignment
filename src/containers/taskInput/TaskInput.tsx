import { useState, useRef, useEffect } from "react";
import { useAppDispatch } from "../../hooks/rtk";
import { editTask, deleteTask } from "../../store/slices";
import "./TaskInput.scss";
import { TaskInterface } from "../../store/types";

interface TaskInputProps {
	parentId?: string;
	taskData: TaskInterface;
	disabled?: boolean;
}

export const TaskInput = ({ taskData, disabled = false }: TaskInputProps) => {
	const dispatch = useAppDispatch();
	const [task, setTask] = useState(taskData.title);
	const inputRef = useRef<HTMLInputElement>(null);
	const { id: taskId } = taskData;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value);
	};

	const handleBlur = () => {
		if (taskId) {
			if (task.trim() === "") {
				dispatch(deleteTask(taskId));
			} else {
				dispatch(editTask({ taskId, newTitle: task }));
			}
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && taskId) {
			e.preventDefault();
			if (task.trim() === "") {
				dispatch(deleteTask(taskId));
			} else {
				dispatch(editTask({ taskId, newTitle: task }));
				inputRef.current?.blur();
			}
		}
	};

	useEffect(() => {
		if (!disabled) {
			inputRef.current?.focus();
		}
	}, [disabled]);

	return (
		<input
			className="task-input"
			ref={inputRef}
			value={task}
			onChange={handleChange}
			onBlur={handleBlur}
			onKeyDown={handleKeyPress}
			type="text"
			placeholder="Title"
			autoFocus
			disabled={disabled}
		/>
	);
};
