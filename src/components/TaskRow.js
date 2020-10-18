import React from "react";

function TaskRow({ task, setDone, deleteTask }) {
  return (
    <div className={"taskRow"}>
      <p className={"taskRow__task"}>{task.description}</p>
      <p className={"taskRow__priority"}>{task.priority}</p>
      <input
        className={"taskRow__checkbox"}
        name={"done"}
        type={"checkbox"}
        checked={task.done}
        onChange={() => setDone(task.id)}
      />
      <div className={"taskRow__btnWrapper"}>
        <button className={"taskRow__btn"} onClick={() => deleteTask(task.id)}>
          d
        </button>
      </div>
    </div>
  );
}

export default TaskRow;
