import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  return (
    <div className={"paginationRow"}>
      <p className={"paginationRow__text"}>Rows per page:</p>
      <select
        name={"rows"}
        value={tasksPerPage}
        onChange={handleNumberOfRowsChange}
        className={"paginationRow__select"}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <p className={"paginationRow__text"}>{visibleRange()}</p>
      <button
        className={"paginationRow__btn"}
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon
          icon={"chevron-left"}
          className={'paginationRow__icon'}
        />
      </button>
      <button
        className={"paginationRow__btn"}
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === numberOfPages || numberOfTasks === 0}
      >
        <FontAwesomeIcon
          icon={"chevron-right"}
          className={'paginationRow__icon'}
        />
      </button>
    </div>
  );
}

export default PaginationRow;
