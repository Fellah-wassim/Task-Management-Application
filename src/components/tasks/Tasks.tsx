import React, { useState } from "react";
import TaskForm from "./TaskForm.tsx";
import TaskList from "./TaskList.tsx";
import { ShowPopup } from "../ShowPopup.tsx";

interface Task {
  id: number;
  name: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      name: "Task 1",
      assignedTo: "John",
      dueDate: "2021-09-20",
      completed: false,
    },
    {
      id: 2,
      name: "Task 2",
      assignedTo: "Jack",
      dueDate: "2021-09-21",
      completed: false,
    },
    {
      id: 3,
      name: "Task 3",
      assignedTo: "Jill",
      dueDate: "2021-09-22",
      completed: false,
    },
    {
      id: 4,
      name: "Task 4",
      assignedTo: "James",
      dueDate: "2021-09-23",
      completed: false,
    },
    {
      id: 5,
      name: "Task 5",
      assignedTo: "Jane",
      dueDate: "2021-09-24",
      completed: false,
    },
    {
      id: 6,
      name: "Task 6",
      assignedTo: "Josh",
      dueDate: "2021-09-25",
      completed: false,
    },
    {
      id: 7,
      name: "Task 7",
      assignedTo: "Joe",
      dueDate: "2021-09-26",
      completed: false,
    },
    {
      id: 8,
      name: "Task 8",
      assignedTo: "Jim",
      dueDate: "2021-09-27",
      completed: false,
    },
    {
      id: 9,
      name: "Task 9",
      assignedTo: "Jake",
      dueDate: "2021-09-28",
      completed: false,
    },
    {
      id: 10,
      name: "Task 10",
      assignedTo: "John",
      dueDate: "2021-09-29",
      completed: false,
    },
  ]);

  const [showPopup, setShowPopup] = useState({
    show: false,
    message: "",
  });

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setShowPopup({
      show: true,
      message: "Task added successfully!",
    });
  };

  const handleSaveEditTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === task.id ? { ...task } : prevTask
      )
    );
    setShowPopup({
      show: true,
      message: `Task updated successfully!`,
    });
  };

  const handleTaskComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setShowPopup({
      show: true,
      message: `Task deleted successfully!`,
    });
  };

  return (
    <div className="container mx-auto">
      {showPopup.show && (
        <ShowPopup setShowPopup={setShowPopup} message={showPopup.message} />
      )}

      <TaskForm onAddTask={handleAddTask} />

      <TaskList
        title="Tasks"
        tasks={tasks}
        onTaskComplete={handleTaskComplete}
        onDeleteTask={handleDeleteTask}
        onSaveEditTask={handleSaveEditTask}
      />
    </div>
  );
};

export default Tasks;
