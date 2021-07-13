import { useEffect, useState } from "react";
import DashboardComponent from "./DashboardComponent";
import TaskEditorComponent from "./TaskEditorComponent";

export default function MainComponent() {
  /*const tasks = {
    Drafted: [
      {
        taskTitle: "Task A",
        taskPriority: "Medium"
      }
    ],
    ToDo: [
      {
        taskTitle: "Task B",
        taskPriority: "Minor"
      }
    ],
    Done: [
      {
        taskTitle: "Task C",
        taskPriority: "Critical"
      }
    ],
    InProgress: [
      {
        taskTitle: "Task D",
        taskPriority: "High"
      }
    ]
  }; */
  const getData = () => {
    fetch("./TaskData.json", {
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
    getData();
  }, []);

  const [taskList, setTasks] = useState({});
  return (
    <div className="fullWidth">
      <DashboardComponent {...taskList} />
      <TaskEditorComponent />
    </div>
  );
}
