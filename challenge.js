// Export the find_duplicates function
function find_duplicates(array){
  var duplicates = [];
  const setNew = new Set();

  for (let num of array){
    if (setNew.has(num)){
      duplicates.push(num);
    }else{
      setNew.add(num);
    }
  }
  return duplicates;
}

module.exports = find_duplicates;