import React from "react";

function PaginationRow({
  tasksPerPage,
                       changeNumberOfRows,
minTaskIndex,
  maxTaskIndex,
  numberOfPages,
  numberOfTasks,
  currentPage,
  setPage,
}) {
  return (
    <div className={"paginateRow"}>
      <p className={"paginateRow__text"}>Rows per page:</p>
      <select name={"rows"} value={tasksPerPage} onChange={changeNumberOfRows}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <p className={"paginateRow__text"}>
        {/*bug display number of tasks when no tasks or deleting last task*/}
        {minTaskIndex === 0 ? minTaskIndex : minTaskIndex + 1} - {" "}
        {maxTaskIndex > numberOfTasks ? numberOfTasks : maxTaskIndex} of{" "}
        {numberOfTasks}
      </p>
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      <button
        // bug nodisabled button when no tasks
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === numberOfPages}
      >
        next
      </button>
    </div>
  );
}

export default PaginationRow;
