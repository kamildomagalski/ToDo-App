import React, {useEffect, useState} from 'react';
import RowContainer from "./components/RowContainer";
import TaskRow from "./components/TaskRow";
import HeaderRow from "./components/HeaderRow";
import AddTaskRow from "./components/AddTaskRow";


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState({
    description: '',
    priority: '',
    done: false
  })
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  const setTask = (e) => {
    const {name, value} = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const addTask= (e) => {
    e.preventDefault();
    setTasks(prevState => ([
      ...prevState,
      newTask
    ]))
  }
  
  return (
    <section className={'app'}>
      <div className={'container'}>
        <RowContainer>
          <AddTaskRow newTask={newTask} setTask={setTask} addTask={addTask}/>
          {/*<div className={'addTaskRow'}>*/}
          {/*  <form className={'addTaskRow__form'} onSubmit={addTask}>*/}
          {/*    <input value={newTask.description}*/}
          {/*           name={'description'}*/}
          {/*           onChange={setTask}*/}
          {/*           type={'text'}*/}
          {/*           placeholder={'Write task description'}/>*/}
          {/*    <div className={'wrapper'}>*/}
          {/*      <p>Priority</p>*/}
          {/*      <select>*/}
          {/*        <option>select</option>*/}
          {/*        <option>Low</option>*/}
          {/*        <option>Medium</option>*/}
          {/*        <option>High</option>*/}
          {/*      </select>*/}
          {/*      <button type={"submit"} >Add task</button>*/}
          {/*    </div>*/}
          {/*  </form>*/}
          {/*</div>*/}
        </RowContainer>
        <RowContainer>
          <HeaderRow/>
          {tasks.map((task, i) => {
            return (
              <TaskRow key={i} task={task}/>
            )
          })}
        </RowContainer>
      </div>
    </section>
  );
}

export default App;

// [
//   {
//     name: 'take out trash',
//     priority: 'medium',
//     done: false
//   },
//   {
//     name: 'wash dishes',
//     priority: 'low',
//     done: true
//   },
//   {
//     name: 'go for a walk',
//     priority: 'low',
//     done: false
//   },
//   {
//     name: 'make pizza',
//     priority: 'high',
//     done: false
//   },
//   {
//     name: 'go sleep',
//     priority: 'medium',
//     done: true
//   },
//   {
//     name: 'somethin else',
//     priority: 'medium',
//     done: false
//   },
//   {
//     name: 'nevermind',
//     priority: 'medium',
//     done: true
//   }
// ]