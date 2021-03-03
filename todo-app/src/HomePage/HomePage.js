import React from "react";
import TaskCard from "../TaskCard/TaskCard";
const HomePage = ({ tasks }) => {
  return (
    <div className="section has-background-grey-dark">
      <div className="  container is-fluid">
        <div className="block ">
          <div className="columns is-multiline">
            {tasks.map((task, index) => (
              <TaskCard key={index} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
<h1 className="title is-1">Home Page</h1>;
