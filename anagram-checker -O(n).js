/* ..Anagaram Challenge : */
function checkAnagram(str1 , str2) {
		//console the String :
    console.log(str1);
    console.log(str2);
    //checl for anagaram :
    //let create a obj :
    let myObj1 = {};
    let myObj2 = {};
    
    for(let i = 0 ; i < str1.length ; i++) {
    	myObj1[str1[i]] = (myObj1.hasOwnProperty(str1[i]) || 0) + 1;
    }
    for(let i = 0 ; i < str2.length ; i++) {
    	myObj2[str2[i]] = (myObj2.hasOwnProperty(str2[i]) || 0) + 1;
    }
    
    console.log(myObj1);
    console.log(myObj2);
    
    for(let i in myObj1) {
    	if(!myObj2.hasOwnProperty(i) || myObj2[i] !== myObj1[i]) {
      	return false;
      }
    }
    return true;
}

console.log(checkAnagram("car" , "rct"));
