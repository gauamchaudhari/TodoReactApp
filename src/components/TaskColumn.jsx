import React from "react";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" alt="" />
        {title}
      </h2>
      {filteredTasks.length === 0 ? (
        <p className="no_tasks_message">No cards added yet.</p>
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
