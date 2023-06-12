import React, { useState } from "react";
import MdEdit from "@mui/icons-material/Edit";
import MdDelete from "@mui/icons-material/Delete";
import MdSave from "@mui/icons-material/SaveAlt";
import MdCancel from "@mui/icons-material/Cancel";
import { Select } from "./Select";
import { DateInput } from "./DateInput";
import { TaskNameInput } from "./TaskNameInput";

interface Task {
  id: number;
  name: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
}

interface TaskListProps {
  title: string;
  tasks: Task[];
  onTaskComplete: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onSaveEditTask: (task: Task) => void;
}

interface EditTask {
  id: number;
  state: boolean;
}

const TaskList: React.FC<TaskListProps> = ({
  title,
  tasks,
  onTaskComplete,
  onDeleteTask,
  onSaveEditTask,
}) => {
  const [editingTask, setEditTask] = useState<EditTask>({
    id: 0,
    state: false,
  });
  const [taskName, setTaskName] = useState<string | null>(null);
  const [assignedTo, setAssignedTo] = useState<string | null>(null);
  const [dueDate, setDueDate] = useState<string | null>(null);

  const handleAssignedToChange = (value: string | null) => {
    setAssignedTo(value);
  };

  const handleTaskNameChange = (value: string | null) => {
    setTaskName(value);
  };

  const handleDueDateChange = (value: string | null) => {
    setDueDate(value);
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditTask({
      id: Number(e.currentTarget.id),
      state: true,
    });
  };

  const handleSaveEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = Number(e.currentTarget.id);
    const prevTask = tasks.find((task) => task.id === id);
    if (prevTask) {
      const task = {
        id: prevTask.id,
        name: taskName || prevTask.name,
        assignedTo: assignedTo || prevTask.assignedTo,
        dueDate: dueDate || prevTask.dueDate,
        completed: prevTask.completed,
      };
      onSaveEditTask(task);
    }

    setEditTask({
      id: 0,
      state: false,
    });
    setTaskName(null);
    setAssignedTo(null);
    setDueDate(null);
  };

  return (
    <div className="border border-gray-300 rounded-md px-4 py-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {tasks.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center py-3 px-4 rounded-lg shadow-md border ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <div className="w-full">
                {editingTask.state && editingTask.id == task.id ? (
                  <TaskNameInput
                    task={task}
                    onTaskNameChange={handleTaskNameChange}
                  />
                ) : (
                  <strong className="text-lg">{task.name}</strong>
                )}

                <div className="flex items-center justify-start gap-2 text-white-600 p-2 max-sm:flex-col max-sm:items-start">
                  Assigned to:
                  {editingTask.state && editingTask.id == task.id ? (
                    <Select onAssignedToChange={handleAssignedToChange} />
                  ) : (
                    <span className="text-indigo-600 font-bold">
                      {task.assignedTo}
                    </span>
                  )}
                  - Due Date:
                  {editingTask.state && editingTask.id == task.id ? (
                    <DateInput
                      task={task}
                      onDueDateChange={handleDueDateChange}
                    />
                  ) : (
                    <span className="text-red-500"> {task.dueDate} </span>
                  )}
                </div>
              </div>
              <div className="flex items-center p-3 space-x-2 max-sm:space-x-0 max-sm:flex-col max-sm:gap-3 max-sm:justify-center">
                {editingTask.state && editingTask.id == task.id ? (
                  <>
                    <button
                      id={task.id.toString()}
                      onClick={handleSaveEditClick}
                      className="p-1 text-gray-200 hover:text-indigo-900 focus:outline-none"
                    >
                      <MdSave />
                    </button>
                    <button
                      id={task.id.toString()}
                      onClick={() => setEditTask({ id: 0, state: false })}
                      className="p-1 text-red-500 hover:text-red-900 focus:outline-none"
                    >
                      <MdCancel />
                    </button>
                  </>
                ) : (
                  <button
                    id={task.id.toString()}
                    onClick={handleEditClick}
                    className="p-1 text-gray-200 hover:text-indigo-900 focus:outline-none"
                  >
                    <MdEdit />
                  </button>
                )}
                <button
                  className="p-1 text-red-600 hover:text-red-900 focus:outline-none"
                  onClick={() => onDeleteTask(task.id)}
                >
                  <MdDelete />
                </button>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onTaskComplete(task.id)}
                  className="ml-2 rounded focus:outline-none"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
