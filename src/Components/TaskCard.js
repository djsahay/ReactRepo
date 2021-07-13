export default function TaskCard(props) {
  const priorityClass = props.taskPriority.toLowerCase();
  return (
    <div className="taskCard">
      <div className="fullWidth taskTitle">{props.taskTitle}</div>
      <div className={`${priorityClass} fullWidth taskPriority`}>
        {props.taskPriority}
      </div>
    </div>
  );
}
