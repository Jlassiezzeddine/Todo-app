import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid/dist/v4";
import "./App.css";

import HomePage from "./HomePage/HomePage";
import CompleteTasks from "./CompleteTasks/CompleteTasks";
import IncompleteTasks from "./IncompleteTasks/IncompleteTasks";
import Navigation from "./Navigation/Navigation";

function App() {
  let tasks = [];
  const [taskList, setTaskList] = useState(tasks);
  const [toggleAddModal, setToggleAddModal] = useState(false);

  const addModalDisplay = () => {
    setToggleAddModal(!toggleAddModal);
  };

  const addTask = (title, content, date) => {
    setTaskList([
      ...taskList,
      { id: uuid(), title, content, date, isComplete: false },
    ]);
  };
  const removetask = (toRemoveTask) => {
    setTaskList(taskList.filter((task) => task.id !== toRemoveTask.id));
  };
  return (
    <React.Fragment>
      <Navigation
        addTask={addTask}
        addModalDisplay={addModalDisplay}
        toggleAddModal={toggleAddModal}
        taskList={taskList}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage tasks={taskList} removetask={removetask} {...props} />
          )}
        />
        <Route path="/completed" component={CompleteTasks} />
        <Route path="/incomplete" component={IncompleteTasks} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
