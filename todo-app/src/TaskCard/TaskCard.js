import React from "react";
import "./TaskCard.scss";
const TaskCard = ({ task }) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{task.title}</p>
        </header>
        <div className="card-content">
          <div className="content">{task.content}</div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item ">
            <i className="fa fa-check mr-2"></i>
          </div>
          <div className="card-footer-item ">
            <i className="fa fa-edit mr-2"></i>
          </div>
          <div className="card-footer-item ">
            <i className="fa fa-trash-alt mr-2"></i>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TaskCard;
