import { useEffect, useState } from "react";
import DashboardComponent from "./DashboardComponent";
import TaskEditorComponent from "./TaskEditorComponent";
import tasks from "../Data/TaskData";

export default function MainComponent() {
  const getData = () => {
    fetch("../TaskData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        console.log("1st Then" + response);
        return response.json();
      })
      .then(function (tasksData) {
        console.log("2nd Then" + tasksData);
        setTasks(tasksData);
      });
  };
  useEffect(() => {
    // getData(); //TODO
    setTasks(tasks);
  }, []);

  const [taskList, setTasks] = useState({});
  return (
    <div className="fullWidth">
      <DashboardComponent {...taskList} />
      <TaskEditorComponent />
    </div>
  );
}
