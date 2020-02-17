import React from "react";
import "./node.scss";

const Node = props => {
  const { x, y, isStart, isEnd, weight, isVisited } = props;

  const whatClass = isStart
    ? "node-start"
    : isEnd
    ? "node-end"
    : isVisited
    ? "node-visited"
    : weight === Infinity
    ? "wall"
    : "";

  return <div id={`node-${x}-${y}`} className={`node ${whatClass}`}></div>;
};

export default Node;
