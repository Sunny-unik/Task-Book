/* eslint-disable react/prop-types */
import { useState } from "react";

export default function List({ data }) {
  const [state, setState] = useState([
    "Add todo to Input",
    "click on plus button",
    "you can drag and drop todo to new List"
  ]);

  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("Node");

    e.target.appendChild(document.getElementById(data));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drag = (e) => {
    e.dataTransfer.setData("Node", e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.input.value;

    inputValue && setState((currentState) => [...currentState, inputValue]);
    e.target.input.value = "";
  };

  return (
    <div
      className="task-list-container border p-2"
      style={{ height: "80vh", display: "flex", flexDirection: "column" }}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      <div
        className=" "
        style={{
          backgroundColor: "F8F6F4",
          width: "16vw",
          height: "10vw",
          flex: "1 0 auto",
          overflow: "auto"
        }}
      >
        <div className="list-name">
          <p>{data.name}</p>
        </div>
        {state &&
          Array.from(state).map((task, index) => {
            return (
              <div
                className="task-name"
                key={index}
                id={`list-item-${index}`}
                onDragStart={drag}
                draggable="true"
              >
                <input
                  type="checkbox"
                  className="task-status-checkbox me-2"
                  id={`task-status-${index}`}
                />
                <label className="bg-light" style={{ width: "14vw" }}>
                  {task}
                </label>
              </div>
            );
          })}
      </div>
      <form className="add-task d-flex" onSubmit={handleSubmit}>
        <input type="text" name="input"></input>
        <button className="bg-info">+</button>
      </form>
    </div>
  );
}
