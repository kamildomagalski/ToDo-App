import React from 'react';
import RowContainer from "./components/RowContainer";
import TaskRow from "./components/TaskRow";


function App() {
  return (
    <section className={'app'}>
      <div className={'container'}>
        <RowContainer>
        
        </RowContainer>
        <RowContainer>
          <TaskRow/>
        </RowContainer>
      </div>
    </section>
  );
}

export default App;
