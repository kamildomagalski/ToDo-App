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
  const handleNumberOfRowsChange = (e) => {
    changeNumberOfRows(e.target.value);
  };
  console.log("minTaskIndex " + minTaskIndex);
  console.log("maxTaskIndex " + maxTaskIndex);
  console.log("numberOfTasks " + numberOfTasks);

  function visibleRange() {
    if (minTaskIndex === 0 && numberOfTasks === 0) {
      return `${minTaskIndex} - ${numberOfTasks} of ${numberOfTasks}`;
    } else if (minTaskIndex === 0 && maxTaskIndex <= numberOfTasks) {
      return `${minTaskIndex + 1} - ${maxTaskIndex} of ${numberOfTasks}`;
    } else if (minTaskIndex === 0 && maxTaskIndex > numberOfTasks) {
      return `${minTaskIndex + 1} - ${numberOfTasks} of ${numberOfTasks}`;
    } else if (minTaskIndex !== 0 && maxTaskIndex > numberOfTasks) {
      return `${minTaskIndex + 1} - ${numberOfTasks} of ${numberOfTasks}`;
    } else if (minTaskIndex !== 0 && maxTaskIndex <= numberOfTasks) {
      return `${minTaskIndex + 1} - ${maxTaskIndex} of ${numberOfTasks}`;
    }
  }
  
  console.log(numberOfPages);
  console.log(currentPage);
  return (
    <div className={"paginateRow"}>
      <p className={"paginateRow__text"}>Rows per page:</p>
      <select
        name={"rows"}
        value={tasksPerPage}
        onChange={handleNumberOfRowsChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <p className={"paginateRow__text"}>{visibleRange()}</p>
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === numberOfPages || numberOfTasks === 0}
      >
        next
      </button>
    </div>
  );
}

export default PaginationRow;
