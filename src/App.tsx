import { useEffect } from "react";
import NewTask from "./NewTask";
import TasksGroup from "./TasksGroup";
import { useAppDispatch } from "./hooks";
import { getAllTasks } from "./redux/tasksSlice";

function App() {
  const disaptch = useAppDispatch();
  useEffect(() => {
    disaptch(getAllTasks());
  }, []);
  return (
    <div className="  fixed top-0  left-0 bottom-0 right-0 overflow-hidden ">
      <div className=" z-10 absolute w-full h-full overflow-hidden flex justify-center items-center ">
        <div className=" w-[90vw] h-[95vh] bg-white rounded bg-opacity-60 p-8 flex flex-col items-center">
          <img src="/shabat-logo.svg" className=" w-1/2" alt="" />
          <NewTask />

          <TasksGroup />
        </div>
      </div>
      <img src="/bg-image.png" className=" absolute w-full h-full z--10" alt="TEST" />
    </div>
  );
}

export default App;
