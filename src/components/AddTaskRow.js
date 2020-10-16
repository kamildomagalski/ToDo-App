import React from 'react';

function AddTaskRow({addTask, newTask, setTask}) {
  return (
    <div className={'addTaskRow'}>
      <form className={'addTaskRow__form'} onSubmit={addTask}>
        <input value={newTask.description}
               name={'description'}
               onChange={setTask}
               type={'text'}
               placeholder={'Enter task description'}/>
        <div className={'wrapper'}>
          <p>Priority</p>
          <select value={newTask.priority} name={'priority'} onChange={setTask}>
            <option value={'select'}>select</option>
            <option value={'Low'}>Low</option>
            <option value={'Medium'}>Medium</option>
            <option value={'High'}>High</option>
          </select>
          <button type={"submit"} >Add task</button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskRow;