import React from "react";
import { Task as TaskType } from "@/types";
import { Checkbox } from "./components/ui/checkbox";
import Task from "./Task";
import { useSelector } from "react-redux";
import { allTasksSelector, tasksStateSelector } from "./redux/tasksSlice";
import SpinAnimation from "./SpinAnimation";
import { useAppSelector } from "./hooks";

const TasksGroup = () => {
  const tasks = useAppSelector(allTasksSelector);
  const tasksState = useAppSelector(tasksStateSelector);
  return (
    <div className=" w-full h-full mt-6 overflow-auto">
      {tasksState === "succeeded" ? (
        tasks.map((task) => {
          return <Task key={task._id} task={task} />;
        })
      ) : (
        <SpinAnimation />
      )}
    </div>
  );
};

export default TasksGroup;
