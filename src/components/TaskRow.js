import React from 'react';


function TaskRow({task, setDone}) {
  console.log(task);
  return (
    <div className={'taskRow'}>
      <p className={'taskRow__task'}>{task.description}</p>
      <p className={'taskRow__priority'}>{task.priority}</p>
      <form className={'taskRow__form'}>
        <input name={'done'} type={'checkbox'} checked={task.done} onChange={setDone}/>
      </form>
    </div>
  );
}

export default TaskRow;