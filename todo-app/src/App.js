import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import CompleteTasks from "./CompleteTasks/CompleteTasks";
import IncompleteTasks from "./IncompleteTasks/IncompleteTasks";
import Navigation from "./Navigation/Navigation";

function App() {
  let tasks = [
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
    {
      title: "qsd",
      content: " lorem ipsum dolor",
      date: "",
      isComplete: false,
    },
  ];
  const addTask = (title, content, date) => {
    tasks = [...tasks, { title, content, date, isComplete: false }];
  };
  return (
    <React.Fragment>
      <Navigation addTask={addTask} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage tasks={tasks} {...props} />}
        />
        <Route path="/completed" component={CompleteTasks} />
        <Route path="/incomplete" component={IncompleteTasks} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
