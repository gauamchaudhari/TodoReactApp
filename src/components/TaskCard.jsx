import React from "react";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="w-full min-h-[100px] border border-gray-200 dark:border-gray-700 rounded-2xl p-5 mb-6 bg-white dark:bg-gray-800 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <p className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {tags &&
            tags.map((tag, idx) => (
              <Tag key={idx} tagName={tag} selected />
            ))}
        </div>
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-200 group bg-gray-200 dark:bg-green-700 cursor-pointer"
          onClick={() => handleDelete(index)}
          aria-label="Delete Task"
        >
          <img
            src={deleteIcon}
            className="w-5 opacity-50 group-hover:opacity-80 transition-opacity duration-200"
            alt="Delete"
          />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
