/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
    let res=[];
  
    for(let i=0;i<arr.length;i++){
      if(arr[i]){
        res.push(arr[i]);
      }
    }
  
    return res;
  }
  
  console.log(bouncer([null, NaN, 1, 2, undefined]));