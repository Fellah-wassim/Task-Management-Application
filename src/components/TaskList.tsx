import React from "react";
import MdEdit from "@mui/icons-material/Edit";
import MdDelete from "@mui/icons-material/Delete";

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
}

const TaskList: React.FC<TaskListProps> = ({
  title,
  tasks,
  onTaskComplete,
  onDeleteTask,
}) => {
  return (
    <div className="border border-gray-300 rounded-md px-4 py-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center mb-2 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <div>
                <strong>{task.name}</strong> (Assigned to: {task.assignedTo}) -
                Due Date: {task.dueDate}
              </div>
              <div className="flex items-center">
                <button className="p-1 text-indigo-600 hover:text-indigo-900 focus:outline-none">
                  <MdEdit />
                </button>
                <button
                  className="p-1 text-red-600 hover:text-red-900 focus:outline-none ml-2"
                  onClick={() => onDeleteTask(task.id)}
                >
                  <MdDelete />
                </button>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onTaskComplete(task.id)}
                  className="ml-2"
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
