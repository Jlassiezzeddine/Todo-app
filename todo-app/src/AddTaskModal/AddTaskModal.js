import React from "react";
import useTaskValidation from "./useTaskValidation";
import validate from "./validateInfo";
const AddTaskModal = ({ addModalDisplay, addTask }) => {
  const submitForm = () => {
    addModalDisplay();
    addTask(values.title, values.body, values.date);
  };

  const { handleChange, values, handleSubmit, errors } = useTaskValidation(
    submitForm,
    validate
  );

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={addModalDisplay}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create new task</p>
          <button
            className="delete"
            aria-label="close"
            onClick={addModalDisplay}
          ></button>
        </header>
        <section className="modal-card-body">
          <form action="" className="form">
            <div className="field">
              <label className="label">Task Title</label>
              <div className="control has-icons-right">
                <input
                  className={`input ${errors.title && "is-danger"}`}
                  type="text"
                  placeholder="Text input"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />

                {errors.title && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {errors.title && <p class="help is-danger">{errors.title}</p>}
            </div>
            <div className="field">
              <label className="label">Task Body</label>
              <div className="control has-icons-right">
                <textarea
                  className={`textarea ${errors.body && "is-danger"}`}
                  placeholder="e.g. Do chores"
                  name="body"
                  value={values.body}
                  onChange={handleChange}
                ></textarea>
                {errors.body && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {errors.body && <p class="help is-danger">{errors.body}</p>}
            </div>
            <div className="field">
              <label className="label">Task Due Date</label>
              <div className="control has-icons-right">
                <input
                  type="date"
                  className={`input ${errors.date && "is-danger"}`}
                  name="date"
                  id="date"
                  value={values.date}
                  onChange={handleChange}
                />
                {errors.date && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {errors.date && <p class="help is-danger">{errors.date}</p>}
            </div>
          </form>
        </section>
        <footer className="modal-card-foot ">
          <button className="button is-success " onClick={() => handleSubmit()}>
            Save
          </button>
          <button className="button is-pulled-right" onClick={addModalDisplay}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddTaskModal;
