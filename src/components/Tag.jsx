import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821", color: "white" },
    CSS: { backgroundColor: "#15d4c8", color: "white" },
    JAVASCRIPT: { backgroundColor: "#ffd12c", color: "#323330" },
    REACT: { backgroundColor: "#4cdafc", color: "#20232a" },
    default: { backgroundColor: "#f9f9f9", color: "#323330" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
