import { useState } from "react";
import config from "./Dashboard.config";

export default function TaskFormComponent(props) {
  const [selectedStatus, setSelectedStatus] = useState(config.taskStatus[0]);
  const [selectedSeverity, setSelectedSeverity] = useState(
    config.taskSeverity[0]
  );
  const [title, setTaskTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask({
      status: selectedStatus,
      task: {
        taskTitle: title,
        taskPriority: selectedSeverity
      }
    });
  };
  const onStatusChange = (statusE) => {
    setSelectedStatus(statusE.target.value);
  };
  const onSeverityChange = (severityE) => {
    setSelectedSeverity(severityE.target.value);
  };
  const onTitleChange = (taskTitleE) => {
    setTaskTitle(taskTitleE.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="fullWidth">
        <label>Task Status:</label>
        <select value={selectedStatus} onChange={onStatusChange}>
          {config.taskStatus.map((status, i) => {
            return (
              <option key={i} value={status}>
                {status}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <div className="fullWidth">
        <label>Task Title:</label>
        <input type="text" value={title} onChange={onTitleChange} />
      </div>
      <br />
      <div className="fullWidth">
        <label>Task Severity:</label>
        <select value={selectedSeverity} onChange={onSeverityChange}>
          {config.taskSeverity.map((severity, i) => {
            return (
              <option key={i} value={severity}>
                {severity}
              </option>
            );
          })}
        </select>
      </div>
      <br />
      <div className="fullWidth">
        <input className="addTask" type="submit" value="Add Task" />
      </div>
    </form>
  );
}
