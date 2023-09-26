import React, { useState } from "react";
import "../App.css";
import AllProducts from "./Products";
import "./expandedCard.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = ({ description }) => {
  return (
    <div className="container2">
      <ReadMore>{description}</ReadMore>
    </div>
  );
};

export default Content;
