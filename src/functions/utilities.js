
export function sortByEnumProperty(priorityArray, sortingType, dataArray, sortingKey) {
  let priorityIndexArray
  
  //changes ascending <-> descending
  if (sortingType === 'ascending') {
    priorityIndexArray = priorityArray
  } else if (sortingType === 'descending') {
    priorityIndexArray = priorityArray.reverse()
  }
  //make a copy to proceed sorting on it
  let tmp= dataArray.map(el => el)
  
  //sort function
  tmp.sort(function (a, b) {
    const firstItem = priorityIndexArray.indexOf(a[`${sortingKey}`])
    const secondItem = priorityIndexArray.indexOf(b[`${sortingKey}`])
    return firstItem - secondItem
  })
  
  //new array after sorting
  return tmp
}



export function sortByProperty(sortingType, dataArray, sortingKey) {
  let numA, numB
  if(sortingType === 'ascending'){
    numA= -1
    numB= 1
    console.log('rosnąco');
  }else if(sortingType === 'descending'){
    numA= 1
    numB= -1
    console.log('malejąco');
  }
  
  let tmp= dataArray.map(el => el)
  tmp.sort(function (a, b) {
    if (a[`${sortingKey}`].toLowerCase() < b[`${sortingKey}`].toLowerCase()) {
      return numA;
    }
    if (a[`${sortingKey}`].toLowerCase() > b[`${sortingKey}`].toLowerCase()) {
      return numB;
    }
    return 0;
  })
  return tmp
}