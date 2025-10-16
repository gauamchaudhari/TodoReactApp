import { useState, useEffect } from "react";


import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
const initialTasks = oldTasks ? JSON.parse(oldTasks) : [];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center transition-colors duration-300">
      <div className="w-full flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 dark:text-gray-900 font-semibold shadow hover:bg-blue-700 dark:hover:bg-yellow-300 transition cursor-pointer"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
      <TaskForm setTasks={setTasks} />
      <main className="flex gap-8 justify-center items-start w-full max-w-6xl px-4 py-8">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
