import React, {useEffect, useState} from 'react';
import RowContainer from "./components/RowContainer";
import TaskRow from "./components/TaskRow";
import HeaderRow from "./components/HeaderRow";
import AddTaskRow from "./components/AddTaskRow";

import {v4 as uuidv4} from 'uuid'
import PaginateRow from "./components/PaginateRow";


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState({
    id: '',
    description: '',
    priority: '',
    done: false
  })
  //pagination states
  const [tasksPerPage, setTasksPerPage] = useState(JSON.parse(localStorage.getItem('rowsPerPage')) || 5)
  const [currentPage, setCurrentPage] = useState(1)
  
  //Pagination
  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask)
  const numberOfPages = Math.ceil(tasks.length / tasksPerPage)
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('rowsPerPage', JSON.stringify(tasksPerPage))
  }, [tasks, tasksPerPage])
  
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
    clearNewTask();
  }
  const changeRows = (e) => {
    const {value} = e.target
    setTasksPerPage(value)
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
  
  const setDelete = (id) => {
    setTasks(tasks.filter(item => item.id !== id))
  }
  const setPage = (number) => {
    setCurrentPage(number)
  }
  
  
  function clearNewTask() {
    setNewTask({
      id: '',
      description: '',
      priority: '',
      done: false
    })
  }
  
  return (
    <section className={'app'}>
      <div className={'container'}>
        <RowContainer>
          <AddTaskRow newTask={newTask} setTask={setTask} addTask={addTask}/>
        </RowContainer>
        <RowContainer>
          <HeaderRow/>
          {currentTasks.map((task) => {
            return (
              <TaskRow key={task.id} task={task} setDone={setDone} setDelete={setDelete}/>
            )
          })}
          <PaginateRow tasksPerPage={tasksPerPage}
                       changeRows={changeRows}
                       numberOfPages={numberOfPages}
                       numberOfTasks={tasks.length}
                       indexOfFirstTask={indexOfFirstTask}
                       indexOfLastTask={indexOfLastTask}
                       currentPage={currentPage}
                       setPage={setPage}/>
        </RowContainer>
      </div>
    </section>
  );
}

export default App;
