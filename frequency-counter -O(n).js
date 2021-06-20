//function same();
function same(array1 , array2) {


	console.log(array1);
  console.log(array2);
  
  let myObj1 = {};
  let myObj2 = {};
  
  for(let i = 0 ; i < array1.length ; i++) {
  	myObj1[array1[i]] = (myObj1.hasOwnProperty(array1[i]) || 0) + 1;
  }
  for(let i = 0 ; i < array2.length ; i++) {
  	myObj2[array2[i]] = (myObj2.hasOwnProperty(array2[i]) || 0) + 1;
  }
  
  console.log(myObj1);
  console.log(myObj2);
  
  for(let i in myObj1) {
  	if(myObj2.hasOwnProperty(i**2) && myObj2[i] !== myObj1[i]) {
    	return false;
    }
  }
  return true;
  
  
}

const [arr1 , arr2] = [[1 , 2 , 3 , 2 , 5] , [9 , 1 , 4 , 4 , 11]];
console.log(same(arr1 , arr2));


/* for(let i = 0 ; i < array1.length ; i++) {
    if(array2.indexOf(array1[i] ** 2) === -1) {
        return false;
    }
  }
  return true; */
