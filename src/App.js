import React, {useEffect, useState} from 'react';
import RowContainer from "./components/RowContainer";
import TaskRow from "./components/TaskRow";
import HeaderRow from "./components/HeaderRow";
import AddTaskRow from "./components/AddTaskRow";

import {v4 as uuidv4} from 'uuid'


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState({
    id: '',
    description: '',
    priority: '',
    done: false
  })
  
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  const setTask = (e) => {
    const {name, value} = e.target;
    let id = uuidv4();
    setNewTask(prevState => ({
      ...prevState,
      id,
      [name]: value
    }))
  }
  const addTask = (e) => {
    e.preventDefault();
    setTasks(prevState => ([
        ...prevState,
        newTask,
      ])
    )
  }
  
  const setDone = (id) => {
    setTasks(tasks.map(item => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item
    }))
  }
  
  return (
    <section className={'app'}>
      <div className={'container'}>
        <RowContainer>
          <AddTaskRow newTask={newTask} setTask={setTask} addTask={addTask}/>
        </RowContainer>
        <RowContainer>
          <HeaderRow/>
          {tasks.map((task) => {
            return (
              <TaskRow key={task.id} task={task} setDone={setDone}/>
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