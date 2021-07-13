import TaskCard from "./TaskCard";

export default function TaskStatus(props) {
  const classVar = props.status.toLowerCase();
  return (
    <div className={`${classVar} taskStatus`}>
      <div className="taskStatusTitle fullWidth">{props.status}</div>
      {props.tasks?.map((element, iteration) => {
        return (
          <TaskCard
            taskTitle={element.taskTitle}
            taskPriority={element.taskPriority}
          />
        );
      })}
    </div>
  );
}
