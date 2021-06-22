function sameFreq(no_1 , no_2) {
  //helper ---> 
  let no_1_count = 0;
  let no_2_count = 0;
  //console
  console.log(no_1 , no_2);

  while(no_1 || no_2) {
    no_1 = Math.floor(no_1 / 10);
    no_2 = Math.floor(no_2 / 10);

    if(no_1 !== 0) {
      no_1_count++;
    }
    if(no_2 !== 0) {
      no_2_count++;
    }

    if(no_1_count !== no_2_count) return false;

   
  }
   return true;

}

 

console.log(sameFreq(182 , 281));
