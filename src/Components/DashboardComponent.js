import TaskStatus from "./TaskStatus";
import config from "./Dashboard.config";

export default function DashboardComponent(props) {
  return (
    <div className="dashboard halfWidth">
      <div className="fullWidth">
        <div className="dashboardTitle">Task Status Dashboard</div>
      </div>
      <div className="fullWidth">
        {config.taskStatus.map((statusValue, i) => {
          return <TaskStatus status={statusValue} tasks={props[statusValue]} />;
        })}
      </div>
    </div>
  );
}
