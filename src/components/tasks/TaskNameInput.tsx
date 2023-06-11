import React from "react";

interface Task {
  id: number;
  name: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
}

interface TaskNameInput {
  task: Task;
  onTaskNameChange: (value: string | null) => void;
}

export const TaskNameInput: React.FC<TaskNameInput> = ({
  task,
  onTaskNameChange,
}) => {
  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onTaskNameChange(selectedValue);
  };

  return (
    <input
      type="text"
      id={`taskName${task.id}`}
      className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
      placeholder={task.name}
      onChange={handleTaskNameChange}
      required
    />
  );
};
