import TaskStatus from "./TaskStatus";

export default function DashboardComponent() {
  return (
    <div className="dashboard">
      <div className="fullWidth">
        <div className="dashboardTitle">Task Status Dashboard</div>
      </div>
      <div className="fullWidth">
        <TaskStatus status="ToDo" />
        <TaskStatus status="InProgress" />
        <TaskStatus status="Done" />
      </div>
    </div>
  );
}
