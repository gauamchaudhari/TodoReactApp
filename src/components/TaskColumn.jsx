import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6 flex-1 min-w-[300px] transition-colors duration-300">
      <h2 className="flex items-center text-xl font-semibold text-blue-700 dark:text-yellow-400 mb-4">
        <img src={icon} className="w-8 h-8 mr-2" alt="" />
        {title}
      </h2>
      {filteredTasks.length === 0 ? (
        <p className="text-gray-400 text-lg text-center my-8 italic">
          No cards added yet.
        </p>
      ) : (
        filteredTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.task}
            tags={task.tags}
            handleDelete={() => handleDelete(tasks.indexOf(task))}
            index={tasks.indexOf(task)}
          />
        ))
      )}
    </section>
  );
};

export default TaskColumn;
