const mutateArray = (array, header) => {
  let localArray = array;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(header)) {
      localArray.splice(i, 1);
    }

    if (array[i] === "") {
      localArray.splice(i, 1);
    }
  }
  return localArray;
};

export default mutateArray;
