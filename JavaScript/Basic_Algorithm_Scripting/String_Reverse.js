/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string
*/

function reverseString(str) {
    let arr=str.split("");
    let s="";
    for(let i=arr.length-1;i>=0;i--){
      s+=arr[i];
    }
    return s;
  }
  
  console.log(reverseString("hello"));