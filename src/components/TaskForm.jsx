import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prevData) => {
        return { ...prevData, tags: filteredTags };
      });
    } else {
      setTaskData((prevData) => {
        return { ...prevData, tags: [...prevData.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prevData) => {
      return [...prevData, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            placeholder="Enter Task"
            className="task_input"
            onChange={handleChange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                tagName="JAVASCRIPT"
                selectTag={selectTag}
                selected={checkTag("JAVASCRIPT")}
              />
              <Tag
                tagName="REACT"
                selectTag={selectTag}
                selected={checkTag("REACT")}
              />
            </div>
            <div>
              <select
                className="task_status"
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
