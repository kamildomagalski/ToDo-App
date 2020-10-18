import React from "react";

function HeaderRow({ sorting, sortByDescription, sortByPriority, sortByDone }) {
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

  const handleSortDone = () => {
    // bug when try to sort on empty array
    if (sorting.done === "descending" || sorting.done === undefined) {
      sortByDone("ascending");
    } else {
      sortByDone("descending");
    }
  };

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
