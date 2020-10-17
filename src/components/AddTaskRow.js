import React from 'react';

function AddTaskRow({addTask, newTask, setTask, errors}) {
  
  function validateDescriptionOff(){
    return (newTask.description.length < 5)
  }
  function validatePriorityOff(){
    return (newTask.priority === 'none')
  }
  console.log(validateDescriptionOff());
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
            <option value={'none'}/>
            <option value={'Low'}>Low</option>
            <option value={'Medium'}>Medium</option>
            <option value={'High'}>High</option>
          </select>
          <button type={"submit"} >Add task</button>
        </div>
        <p className={validateDescriptionOff()? 'addTaskRow__error' : 'd-none'}>{errors.description}</p>
        <p className={validatePriorityOff()? 'addTaskRow__error': 'd-none'}>{errors.priority}</p>
      </form>
    </div>
  );
}

export default AddTaskRow;