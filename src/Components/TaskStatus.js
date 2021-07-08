import TaskCard from "./TaskCard";

export default function TaskStatus(props) {
  return (
    <div className="taskStatus">
      <div className="taskStatusTitle fullWidth">{props.status}</div>
      <TaskCard taskTitle="Task A" taskPriority="High" />
    </div>
  );
}
