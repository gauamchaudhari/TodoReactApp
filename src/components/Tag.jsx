import React from "react";

const tagClasses = {
  HTML: "bg-orange-400 text-white",
  CSS: "bg-cyan-400 text-white",
  JAVASCRIPT: "bg-yellow-300 text-gray-800",
  REACT: "bg-cyan-300 text-gray-900",
  default: "bg-gray-100 text-gray-800",
};

const Tag = ({ tagName, selectTag, selected }) => {
  const baseClasses =
    "text-sm font-medium border border-gray-200 rounded px-3 py-1 mr-2 cursor-pointer transition";
  const selectedClasses = selected
    ? tagClasses[tagName] || tagClasses.default
    : tagClasses.default;

  return (
    <button
      type="button"
      className={`${baseClasses} ${selectedClasses} ${selected ? "shadow-md scale-105" : ""}`}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
