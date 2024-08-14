import { Delete } from "../../assets/icons/Delete";
import "./TaskCompletedNotification.scss";
export const TaskCompletedNotification = () => {
	return (
		<div className="task-completed-notification ">
			<Delete color="#FFFFFF" />
			<span className="task-completed-notification-message">Completed</span>
		</div>
	);
};
