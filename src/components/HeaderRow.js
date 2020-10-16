import React from 'react';

function HeaderRow() {
 return (
  <div className={'headerRow'}>
   <p className={'headerRow__title'}>Task name</p>
   <p className={'headerRow__title'}>Priority</p>
   <p className={'headerRow__title'}>Done</p>
  </div>
 );
}
export default HeaderRow;