import React, {useState} from 'react';
import RowContainer from "./components/RowContainer";
import TaskRow from "./components/TaskRow";


function App() {
  
  const [tasks, setTasks]= useState([
    {
      name: 'take out trash',
      priority: 'medium',
      done: false
    },
    {
      name: 'wash dishes',
      priority: 'low',
      done: true
    },
    {
      name: 'go for a walk',
      priority: 'low',
      done: false
    },
    {
      name: 'make pizza',
      priority: 'high',
      done: false
    },
    {
      name: 'go sleep',
      priority: 'medium',
      done: true
    },
    {
      name: 'somethin else',
      priority: 'medium',
      done: false
    },
    {
      name: 'nevermind',
      priority: 'medium',
      done: true
    }
  ])
  
  return (
    <section className={'app'}>
      <div className={'container'}>
        <RowContainer>
        
        </RowContainer>
        <RowContainer>
          {tasks.map((task, i)=>{
            return(
              <TaskRow key={i} task={task}/>
            )
          })}
          
        </RowContainer>
      </div>
    </section>
  );
}

export default App;
