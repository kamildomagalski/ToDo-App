import React from 'react';


function TaskRow({task}) {
  return (
    <div className={'taskRow'}>
      <p className={'taskRow__task'}>{task.name}</p>
      <p className={'taskRow__priority'}>{task.priority}</p>
      <form className={'taskRow__form'}>
        <input type={'checkbox'} checked={task.done}/>
      </form>
    </div>
  );
}

export default TaskRow;