import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTaskRow({ addTask }) {
  const [errors, setErrors] = useState({
    descriptionErrorMsg: "",
    priorityErrorMsg: "",
  });

  const [newTask, setNewTask] = useState({
    id: "",
    description: "",
    priority: "none",
    done: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addTask(newTask);
    clearErrors();
    clearNewTask();
  };

  const setTask = (e) => {
    const { name, value } = e.target;
    // let id = newTask.id ? newTask.id : uuidv4()
    let id = uuidv4();
    setNewTask((prevState) => ({
      ...prevState,
      id,
      [name]: value,
    }));
  };

  function validate() {
    let isValid = true;
    if (newTask.description.length < 5) {
      setErrors((prevState) => ({
        ...prevState,
        descriptionErrorMsg: "Description must contain at least 5 characters.",
      }));
      isValid = false;
    }
    if (newTask.priority === "none") {
      setErrors((prevState) => ({
        ...prevState,
        priorityErrorMsg: "You have to set priority.",
      }));
      isValid = false;
    }
    return isValid;
  }

  function clearErrors() {
    setErrors({
      descriptionErrorMsg: "",
      priorityErrorMsg: "",
    });
  }

  function clearNewTask() {
    setNewTask({
      id: "",
      description: "",
      priority: "none",
      done: false,
    });
  }
  // is it bug: double validation??
  function shouldHideDescriptionMsgOff() {
    return newTask.description.length < 5;
  }

  function shouldHidePriorityMsgOff() {
    return newTask.priority === "none";
  }

  return (
    <div className={"addTaskRow"}>
      <form className={"addTaskRow__form"} onSubmit={handleSubmit}>
        <input
          value={newTask.description}
          name={"description"}
          onChange={setTask}
          type={"text"}
          placeholder={"Enter task description"}
          className={"addTaskRow__input addTaskRow__input-text"}
        />
        <div className={"wrapper"}>
          <p>Priority:</p>
          <select
            value={newTask.priority}
            name={"priority"}
            onChange={setTask}
            className={"addTaskRow__input addTaskRow__input-select"}
          >
            <option value={"none"}>select...</option>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
          <button type={"submit"} className={"addTaskRow__btn"}>
            Add task
          </button>
        </div>
      </form>
      <p className={shouldHideDescriptionMsgOff() ? "addTaskRow__error" : "d-none"
        }
      >
        {errors.descriptionErrorMsg}
      </p>
      <p className={shouldHidePriorityMsgOff() ? "addTaskRow__error" : "d-none"}
      >
        {errors.priorityErrorMsg}
      </p>
    </div>
  );
}

export default AddTaskRow;
