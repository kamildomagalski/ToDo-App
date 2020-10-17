import React from 'react';

function PaginateRow({tasksPerPage, changeRows, indexOfFirstTask, indexOfLastTask, numberOfPages, numberOfTasks, currentPage, setPage}) {
  return (
    <div className={'paginateRow'}>
      <p className={'paginateRow__text'}>Rows per page:</p>
      <select name={'rows'} value={tasksPerPage} onChange={changeRows}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <p className={'paginateRow__text'}>{indexOfFirstTask+1} - {(indexOfLastTask > numberOfTasks) ? numberOfTasks : indexOfLastTask} of {numberOfTasks}</p>
      <button onClick={()=>setPage(currentPage - 1)} disabled={(currentPage === 1)}>prev</button>
      <button onClick={()=>setPage(currentPage + 1)} disabled={(currentPage === numberOfPages)}>next</button>
    </div>
  );
}

export default PaginateRow;