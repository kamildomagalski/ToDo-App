import React, { useEffect, useState } from "react";
import RowContainer from "./components/RowContainer";
import TaskRow from "./components/TaskRow";
import HeaderRow from "./components/HeaderRow";
import AddTaskRow from "./components/AddTaskRow";
import { sortByEnumProperty, sortByProperty } from "./functions/utilities";
import PaginateRow from "./components/PaginateRow";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [sorting, setSorting] = useState(
    JSON.parse(localStorage.getItem("sorting")) || {}
  );
  //pagination states
  const [tasksPerPage, setTasksPerPage] = useState(
    JSON.parse(localStorage.getItem("tasksPerPage")) || 5
  );
  const [currentPage, setCurrentPage] = useState(1);

  //Pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  const numberOfPages = Math.ceil(tasks.length / tasksPerPage);

  //set page to last when deleting last task
  if (currentPage > numberOfPages && tasks.length > 0)
    setCurrentPage(numberOfPages);
  //set page to first after changing taskPerPage
  useEffect(() => {
    setCurrentPage(1);
  }, [tasksPerPage]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tasksPerPage", JSON.stringify(tasksPerPage));
    localStorage.setItem("sorting", JSON.stringify(sorting));
  }, [tasks, tasksPerPage, sorting]);

  const addTask = (newTask) => {
    setTasks((prevState) => [...prevState, newTask]);
  };
  const changeRows = (e) => {
    const { value } = e.target;
    setTasksPerPage(value);
  };
  const setDone = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  const setDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const setPage = (number) => {
    setCurrentPage(number);
  };
  function sortByDescription(order) {
    if (order === "ascending") {
      setTasks(sortByProperty("ascending", tasks, "description"));
    } else {
      setTasks(sortByProperty("descending", tasks, "description"));
    }
    setSorting({
      description: order,
    });
  }
  function sortByPriority(order) {
    if (order === "ascending") {
      setTasks(
        sortByEnumProperty(
          ["High", "Medium", "Low"],
          "ascending",
          tasks,
          "priority"
        )
      );
    } else {
      setTasks(
        sortByEnumProperty(
          ["High", "Medium", "Low"],
          "descending",
          tasks,
          "priority"
        )
      );
    }
    setSorting({
      priority: order,
    });
  }

  function sortByDone(order) {
    if (order === "ascending") {
      setTasks(sortByEnumProperty([true, false], "ascending", tasks, "done"));
    } else {
      setTasks(sortByEnumProperty([true, false], "descending", tasks, "done"));
    }
    setSorting({
      done: order,
    });
  }

  return (
    <section className={"app"}>
      <div className={"container"}>
        <RowContainer>
          <AddTaskRow addTask={addTask} />
        </RowContainer>
        <RowContainer>
          <HeaderRow
            sortByDescription={sortByDescription}
            sortByPriority={sortByPriority}
            sorting={sorting}
          />
          {currentTasks.map((task) => {
            return (
              <TaskRow
                key={task.id}
                task={task}
                setDone={setDone}
                setDelete={setDelete}
              />
            );
          })}
          <PaginateRow
            tasksPerPage={tasksPerPage}
            changeRows={changeRows}
            numberOfPages={numberOfPages}
            numberOfTasks={tasks.length}
            indexOfFirstTask={indexOfFirstTask}
            indexOfLastTask={indexOfLastTask}
            currentPage={currentPage}
            setPage={setPage}
          />
        </RowContainer>
      </div>
    </section>
  );
}

export default App;
