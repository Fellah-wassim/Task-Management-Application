import React, { useState } from "react";

interface Task {
  id: number;
  name: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
}

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState<Task>({
    id: 0,
    name: "",
    assignedTo: "",
    dueDate: "",
    completed: false,
  });

  const users = [
    { id: 0, name: "John" },
    { id: 1, name: "jack" },
    { id: 2, name: "jill" },
    { id: 3, name: "james" },
    { id: 4, name: "jane" },
    { id: 5, name: "josh" },
    { id: 6, name: "joe" },
    { id: 7, name: "jim" },
    { id: 8, name: "jake" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(task);
    setTask((prevTask) => {
      return {
        id: prevTask.id + 1,
        name: "",
        assignedTo: "",
        dueDate: "",
        completed: false,
      };
    });
  };

  return (
    <div className="border border-gray-300 rounded-md px-4 py-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="task-name"
            className="block text-sm font-medium text-white-700"
          >
            Task Name
          </label>
          <input
            type="text"
            id="task-name"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            placeholder="Enter task name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="assigned-to"
            className="block text-sm font-medium text-white-700"
          >
            Assigned To
          </label>
          <select
            id="assigned-to"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
            required
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option
                className="text-sm font-medium text-white-700"
                key={user.id}
                value={user.name}
              >
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="due-date"
            className="block text-sm font-medium text-white-700"
          >
            Due Date
          </label>
          <input
            type="date"
            id="due-date"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
