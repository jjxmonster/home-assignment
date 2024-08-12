import { TaskInterface } from "../../store/types";

interface TaskCardProps {
	task: TaskInterface;
}
export const TaskCard = ({ task }: TaskCardProps) => {
	return <div>Task Card</div>;
};
