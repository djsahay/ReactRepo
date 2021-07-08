export default function TaskCard(props) {
  return (
    <div className="taskCard">
      <div className="fullWidth taskTitle">{props.taskTitle}</div>
      <div className="fullWidth taskPriority">{props.taskPriority}</div>
    </div>
  );
}
