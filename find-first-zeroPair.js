function sumZero(myArray) {
	//Check and find the first pair which is giving zero on adding :
  //method using two pointer :
  console.log("FUnction called");
  console.log(myArray);
  
  let i = 0 ; //First Pointer
  let len = myArray.length ;
  let j = len-1; //Second parameter :
  
  while(i < j) {
  		let sum = myArray[i] + myArray[j];
  		console.log(sum);
    	// -4 + 10 = 6 > 0 so decrease the high value
      // -4 + 5 = 1 > 0 so same decrease the high value
      // -4 + 0 = -4 < 0 so decrease the low value :
      // -3 + 0 = -3 < 0 so decre the low :
      
      if(sum === 0) {
      	console.log(myArray[i] , myArray[j]);
        return "";
      }
      else if(sum > 0) {
      	//decrese the right value :
        j--;
      }
      else if(sum < 0) {
      	i++;
      }

  }
  
}

sumZero([-4 , -3 , -1 , 0 , 3 , 5 , 10]);
