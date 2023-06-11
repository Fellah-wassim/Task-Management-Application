import React from "react";

interface Task {
  id: number;
  name: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
}

interface DateInputProps {
  task: Task;
  onDueDateChange: (value: string | null) => void;
}

export const DateInput: React.FC<DateInputProps> = ({
  task,
  onDueDateChange,
}) => {
  const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onDueDateChange(selectedValue);
  };

  return (
    <input
      type="date"
      id={`dueDate${task.id}`}
      className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      defaultValue={task.dueDate}
      onChange={handleDueDateChange}
      required
    />
  );
};
