import React from "react";
import "./Tag.css";

const Tag = ({ tagName }) => {
  return (
    <button type="submit" className="tag">
      {tagName}
    </button>
  );
};

export default Tag;
