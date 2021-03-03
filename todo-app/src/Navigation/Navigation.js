import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

const Navigation = ({ addTask }) => {
  let d = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = d.getDay();
  const dayName = days[dayIndex];
  const day = d.getDay();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  let date = {
    dayName,
    monthName,
    day,
  };
  const [toggleModal, setToggleModal] = useState(false);

  const modalDisplay = () => {
    setToggleModal(!toggleModal);
    console.log(toggleModal);
  };

  return (
    <React.Fragment>
      <nav className="navbar is-spaced has-background-grey-darker">
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="infos">
              <h2 className="title is-4 has-text-white">{`${date.dayName}, ${date.monthName} ${date.day}`}</h2>
              <p className="subtitle is-6 has-text-info has-text-weight-bold">
                3 Active Tasks
              </p>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <ul className="navbar-menu">
            <li>
              <Link to="/completed" className="navbar-item has-text-white link">
                Completed Tasks
              </Link>
            </li>

            <li>
              <Link
                to="/incomplete"
                className="navbar-item has-text-white link"
              >
                Incompleted Tasks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbar is-spaced has-background-grey-darker">
        <div className="navbar-item navbar-start">
          <div className=" breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/" className="has-text-light">
                  Home
                </Link>
              </li>

              <li className="is-active">
                <span aria-current="page" className="has-text-grey ml-2">
                  Overview
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" navbar-end  ">
          <div className="navbar-item">
            <div className="field">
              <p className="control has-icons-left">
                <input
                  type="text"
                  className="input  is-dark"
                  placeholder="Search for a task"
                />
                <span className="icon  is-left ">
                  <i className="fas fa-search fa-1x"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="navbar-item">
            <button className="button is-info ">
              <i className="fa fa-sliders-h "></i>
            </button>
          </div>
          <div className="navbar-item">
            <button className="button is-primary" onClick={modalDisplay}>
              <i className="fa fa-plus fa-xs mr-2"></i>Create
            </button>
          </div>
        </div>
        {toggleModal ? (
          <AddTaskModal modalDisplay={modalDisplay} addTask={addTask} />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Navigation;
