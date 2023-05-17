export default function List() {
  let todoList = [
    "complete Task",
    "upload code to github",
    "host project",
    "send it to the company"
  ];
  return (
    <div className="task-list-container border p-2" style={{ height: "80vh" }}>
      <div className=" " style={{ backgroundColor: "F8F6F4", width: "16vw", height: "10vw" }}>
        <div className="list-name">
          <p>{"List name"}</p>
        </div>
        {todoList.map((task, index) => {
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
    </div>
  );
}
