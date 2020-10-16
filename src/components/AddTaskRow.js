import React from 'react';

function AddTaskRow({addTask, newTask, setTask}) {
  return (
    <div className={'addTaskRow'}>
      <form className={'addTaskRow__form'} onSubmit={addTask}>
        <input value={newTask.description}
               name={'description'}
               onChange={setTask}
               type={'text'}
               placeholder={'Write task description'}/>
        <div className={'wrapper'}>
          <p>Priority</p>
          <select>
            <option>select</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button type={"submit"} >Add task</button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskRow;