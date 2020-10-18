import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

function AddTaskRow({addTask}) {
  const [errors, setErrors] = useState({
    description: '',
    priority: ''
  })
  
  const [newTask, setNewTask] = useState({
    id: '',
    description: '',
    priority: 'none',
    done: false
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return
    addTask(newTask);
    clearErrors();
    clearNewTask()
  }
  
  const setTask = (e) => {
    const {name, value} = e.target;
    let id = uuidv4();
    setNewTask(prevState => ({
      ...prevState,
      id,
      [name]: value
    }))
  }
  
  function validate() {
    let isValid = true
    if (newTask.description.length < 5) {
      setErrors(prevState => ({
        ...prevState,
        description: 'Description must contain at least 5 characters.'
      }))
      isValid = false
    }
    if (newTask.priority === 'none') {
      setErrors(prevState => ({
        ...prevState,
        priority: 'You have to set priority.'
      }))
      isValid = false
    }
    return isValid
  }
  
  function clearErrors() {
    setErrors({
      description: '',
      priority: ''
    })
  }
  
  function clearNewTask() {
    setNewTask({
      id: '',
      description: '',
      priority: 'none',
      done: false
    })
  }
  
  function validateDescriptionOff() {
    return (newTask.description.length < 5)
  }
  
  function validatePriorityOff() {
    return (newTask.priority === 'none')
  }
  
  return (
    <div className={'addTaskRow'}>
      <form className={'addTaskRow__form'} onSubmit={handleSubmit}>
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
          <button type={"submit"}>Add task</button>
        </div>
        <p className={validateDescriptionOff() ? 'addTaskRow__error' : 'd-none'}>{errors.description}</p>
        <p className={validatePriorityOff() ? 'addTaskRow__error' : 'd-none'}>{errors.priority}</p>
      </form>
    </div>
  );
}

export default AddTaskRow;