import React from 'react';


function TaskRow({task, setDone, setDelete}) {
  

  return (
    <div className={'taskRow'}>
      <p className={'taskRow__task'}>{task.description}</p>
      <p className={'taskRow__priority'}>{task.priority}</p>
      <form className={'taskRow__form'}>
        <input name={'done'} type={'checkbox'} checked={task.done} onChange={()=>setDone(task.id)}/>
      </form>
      <button onClick={()=>setDelete(task.id)}>d</button>
    </div>
  );
}

export default TaskRow;