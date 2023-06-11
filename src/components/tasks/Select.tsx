import React from "react";

interface user {
  id: number;
  name: string;
}

interface SelectProps {
  onAssignedToChange: (value: string | null) => void;
}

const users: user[] = [
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

export const Select: React.FC<SelectProps> = ({ onAssignedToChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onAssignedToChange(selectedValue);
  };

  return (
    <div>
      <select
        id={`assignedTo`}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
        onChange={handleSelectChange}
        required
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option
            className="text-sm font-medium text-white-700"
            key={user.id}
            id={`assignedTo${user.id}`}
            value={user.name}
          >
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
