import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./components/ui/dialog";
import { useAppDispatch } from "./hooks";
import { newTask } from "./redux/tasksSlice";

const NewTask = () => {
  const dispatch = useAppDispatch();
  const [taskTitle, setTaskTitle] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-0 gap-3 shadow-2xl w-full h-16 bg-[#161616] text-white rounded-t-2xl flex justify-center items-center">
        <div className=" font-bold text-lg"> משימה חדשה</div>
        <img src="/plus-icon.svg" alt="" className=" w-6 h-6" />
      </DialogTrigger>
      <DialogContent>
        <input
          value={taskTitle}
          placeholder="שם משימה"
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          type="text"
          className=" font-semibold text-lg text-right p-3"
          autoFocus
        />
        <DialogClose
          onClick={() => {
            dispatch(newTask(taskTitle));
          }}
          className=" bg-[#161616] text-white font-semibold p-3  rounded-xl"
        >
          יצירת משימה
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default NewTask;
