import React, { useState, useEffect } from "react";
import Node from "./node/node";
import "./pathfinding.scss";

const PathfindingVisualizer = props => {
  const [grid, setGrid] = useState([]);
  const [startY, setStartY] = useState(10);
  const [startX, setStartX] = useState(10);
  const [endY, setEndY] = useState(10);
  const [endX, setEndX] = useState(40);

  const createNode = (x, y) => {
    return {
      x,
      y,
      isStart: x === startX && y === startY,
      isEnd: x === endX && y === endY,
      distance: Infinity,
      isVisited: false,
      weight: 1
    };
  };

  useEffect(() => {
    let res = [];
    for (let i = 0; i < 20; i++) {
      let temp = [];
      for (let j = 0; j < 50; j++) {
        temp.push(createNode(i, j));
      }
      res.push(temp);
    }
    setGrid(res);
  }, []);

  return (
    <React.Fragment>
      <div className="grid">
        {grid.map((row, rowId) => {
          return (
            <div key={rowId}>
              {row.map((node, nodeId) => {
                const {
                  x,
                  y,
                  isStart,
                  isEnd,
                  distance,
                  isVisited,
                  weight
                } = node;
                return (
                  <Node
                    key={nodeId}
                    x={x}
                    y={y}
                    isStart={isStart}
                    isEnd={isEnd}
                    weight={weight}
                    isVisited={isVisited}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PathfindingVisualizer;
