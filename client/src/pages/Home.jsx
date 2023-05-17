export default function Home() {
  let todoList = [
    "complete Task",
    "upload code to github",
    "host project",
    "send it to the company"
  ];
  return (
    <div className="">
      <div className="task-list-container border" style={{ width: "20vw", height: "10vw" }}>
        <div className="list-name">
          <p>{"List name"}</p>
        </div>
        {todoList.map((task, index) => {
          return (
            <div className="task-name" key={index}>
              <input type="checkbox" className="task-status-checkbox" id={"task-status" - index} />
              <label>{task}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
