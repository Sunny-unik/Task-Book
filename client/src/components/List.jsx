import { useState } from "react";

export default function List() {
  let todoList = [
    "complete Task",
    "upload code to github",
    "host project",
    "send it to the company"
  ];
  const [state, setState] = useState(todoList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.input.value;
    console.log(inputValue);

    inputValue && setState((currentState) => [...currentState, inputValue]);

    console.log(state);

    e.target.input.value = "";
  };

  return (
    <div
      className="task-list-container border p-2"
      style={{ height: "80vh", display: "flex", flexDirection: "column" }}
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
          <p>{"List name"}</p>
        </div>
        {state &&
          Array.from(state).map((task, index) => {
            return (
              <div className="task-name" key={index}>
                <input
                  type="checkbox"
                  className="task-status-checkbox me-2"
                  id={"task-status" - index}
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
