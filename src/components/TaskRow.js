import React from 'react';


function TaskRow() {
  return (
    <div className={'taskRow'}>
      <p className={'taskRow__task'}>Take out the trash</p>
      <p className={'taskRow__priority'}>Medium</p>
      <form className={'taskRow__form'}>
        <input type={'checkbox'}/>
      </form>
    </div>
  );
}

export default TaskRow;