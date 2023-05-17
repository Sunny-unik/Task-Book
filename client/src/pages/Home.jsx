import { useState } from "react";
import List from "../components/List";

export default function Home() {
  const [state, setState] = useState([]);

  const handleClick = () => {
    const inputValue = { name: "List " };
    inputValue && setState((currentState) => [...currentState, inputValue]);
  };

  return (
    <div className="home-container d-flex">
      <div className="d-flex overflow-x " style={{ maxWidth: "100%", overflowX: "auto" }}>
        {Array.from(state).map((elem, index) => (
          <List data={{ name: elem.name + index }} key={index} />
        ))}
      </div>
      <div className="border " style={{ maxWidth: "18vw" }}>
        <p className="border" style={{ width: "10vw" }}>
          Create New List
        </p>
        <div className="create-new-list justify-content-center text-center ">
          <input
            type="submit"
            value={"+"}
            className="rounded-pill"
            style={{ height: "12vh", width: "5vw" }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
