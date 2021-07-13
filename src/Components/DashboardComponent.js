import TaskStatus from "./TaskStatus";
import config from "./Dashboard.config";

export default function DashboardComponent() {
  return (
    <div className="dashboard">
      <div className="fullWidth">
        <div className="dashboardTitle">Task Status Dashboard</div>
      </div>
      <div className="fullWidth">
        {config.taskStatus.map((statusValue, i) => {
          return <TaskStatus status={statusValue} />;
        })}
      </div>
    </div>
  );
}
