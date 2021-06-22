function findUnique(myArray){
  //console.log(myArray);

  //using two pointer method :
  let i = 0 ; 
  let len = myArray.length;
  let j = 1;
  let uniCount = 0;

  if(len === 0) {
    
    return "0";
  }


  while(j < len) {
    if(myArray[i] !== myArray[j]) {
      myArray[i+1] = myArray[j];
      i++;
    }
    j++;
  }

  return i+1;

}

findUnique([1 ,1 , 1 , 2 , 3 , 3 , 4 , 4 , 5 , 6]);
