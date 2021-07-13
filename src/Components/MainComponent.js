import DashboardComponent from "./DashboardComponent";
import TaskEditorComponent from "./TaskEditorComponent";

export default function MainComponent() {
  return (
    <div className="fullWidth">
      <DashboardComponent />
      <TaskEditorComponent />
    </div>
  );
}
