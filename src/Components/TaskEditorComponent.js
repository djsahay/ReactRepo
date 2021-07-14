import TaskFormComponent from "./TaskFormComponent";

export default function TaskEditorComponent(props) {
  return (
    <div className="taskEditor halfWidth">
      <TaskFormComponent addTask={props.addTask} />
    </div>
  );
}
