import React, { useState } from "react";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => taskData.tags.some((item) => item === tag);

  const selectTag = (tag) => {
    if (checkTag(tag)) {
      setTaskData((prevData) => ({
        ...prevData,
        tags: prevData.tags.filter((item) => item !== tag),
      }));
    } else {
      setTaskData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, tag],
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevData) => [...prevData, taskData]);
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-300">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-yellow-400 mb-6 text-center">
        Todo React App
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Enter Task"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          onChange={handleChange}
        />
        <div>
          <label className="block text-sm text-white font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="flex gap-2 flex-wrap">
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag tagName="JAVASCRIPT" selectTag={selectTag} selected={checkTag("JAVASCRIPT")} />
            <Tag tagName="REACT" selectTag={selectTag} selected={checkTag("REACT")} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select
            className="px-4 py-2 text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="status"
            value={taskData.status}
            onChange={handleChange}
          >
            <option value="todo" className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">To Do</option>
            <option value="doing" className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">Doing</option>
            <option value="done" className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">Done</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
