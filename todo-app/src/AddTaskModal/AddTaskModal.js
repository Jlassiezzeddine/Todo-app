import React from "react";

const AddTaskModal = ({ modalDisplay, addTask }) => {
  const handleSaveClick = () => {
    modalDisplay();
    addTask();
  };
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={modalDisplay}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button
            className="delete"
            aria-label="close"
            onClick={modalDisplay}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="has-background-primary">
            <p>hello</p>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSaveClick}>
            Save changes
          </button>
          <button className="button" onClick={modalDisplay}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddTaskModal;
