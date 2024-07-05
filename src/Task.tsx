import React, { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";
import { Task as TaskType } from "@/types";
import { useAppDispatch } from "./hooks";
import { changeTaskState, removeTask } from "./redux/tasksSlice";

const Task = ({ task }: { task: TaskType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" text-right shadow-md w-full gap-2 bg-white/40 mb-4 rounded-xl p-3 border-white border-[1px]  flex justify-end items-center">
      <div
        className="  flex-1  "
        onClick={() => {
          dispatch(removeTask(task._id));
        }}
      >
        <img src="/trash-icon.svg" className="   w-4 h-4" alt="32fdsf" />
      </div>
      <div className=" flex justify-end items-center w-40 overflow-hidden">{task.title}</div>
      <Checkbox
        checked={task.isCompleted}
        onCheckedChange={(newValue: boolean) => {
          dispatch(changeTaskState({ taskId: task._id, newState: newValue }));
        }}
      />
    </div>
  );
};

export default Task;
