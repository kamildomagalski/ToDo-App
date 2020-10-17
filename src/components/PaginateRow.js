import React from 'react';

function PaginateRow() {
  return (
    <div className={'paginateRow'}>
      <p className={'paginateRow__text'}>Rows per page:</p>
      <select>
        <option>5</option>
        <option>10</option>
        <option>15</option>
      </select>
      <p className={'paginateRow__text'}>1 - of 11</p>
      <button>prev</button>
      <button>next</button>
    </div>
  );
}

export default PaginateRow;