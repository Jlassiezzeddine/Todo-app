import React from "react";
import "./HomePage.scss";
import TaskCard from "../TaskCard/TaskCard";

const HomePage = ({ tasks, removetask }) => {
  return (
    <div className="section has-background-grey-dark tasks-list-wrapper">
      <div className="  container is-fluid">
        <div className="block ">
          <div className="columns is-multiline">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} removetask={removetask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
