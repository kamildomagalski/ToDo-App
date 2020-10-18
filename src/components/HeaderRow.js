import React from 'react';

function HeaderRow(
  {
    sortAscendingByDescription,
    sortDescendingByDescription,
    sorting, sortAscendingByPriority,
    sortDescendingByPriority,
    sortAscendingByDone,
    sortDescendingByDone
  }) {
  
  const handleSortDescription = (sorting.description === 'descending' || sorting.description === undefined) ? sortAscendingByDescription : sortDescendingByDescription
  const handleSortPriority = (sorting.priority === 'descending' || sorting.priority === undefined) ? sortAscendingByPriority : sortDescendingByPriority
  const handleSortDone= (sorting.done === 'descending' || sorting.done === undefined) ? sortAscendingByDone : sortDescendingByDone

  return (
    <div className={'headerRow'}>
      <p className={'headerRow__title'} onClick={handleSortDescription}>Task name</p>
      <p className={'headerRow__title'} onClick={handleSortPriority}>Priority</p>
      <p className={'headerRow__title'} onClick={handleSortDone}>Done</p>
    </div>
  );
}

export default HeaderRow;