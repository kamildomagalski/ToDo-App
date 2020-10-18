import React from "react";

function HeaderRow({
  sorting,
  sortAscendingByDone,
  sortDescendingByDone,
  sortByDescription,
  sortByPriority,
}) {
  const handleSortDescription = () => {
    if (
      sorting.description === "descending" ||
      sorting.description === undefined
    ) {
      sortByDescription("ascending");
    } else {
      sortByDescription("descending");
    }
  };

  const handleSortPriority = () => {
    if (sorting.priority === "descending" || sorting.priority === undefined) {
      sortByPriority("ascending");
    } else {
      sortByPriority("descending");
    }
  };

  const handleSortDone =
    sorting.done === "descending" || sorting.done === undefined
      ? sortAscendingByDone
      : sortDescendingByDone;

  return (
    <div className={"headerRow"}>
      <p className={"headerRow__title"} onClick={handleSortDescription}>
        Task name
      </p>
      <p className={"headerRow__title"} onClick={handleSortPriority}>
        Priority
      </p>
      <p className={"headerRow__title"} onClick={handleSortDone}>
        Done
      </p>
    </div>
  );
}

export default HeaderRow;
