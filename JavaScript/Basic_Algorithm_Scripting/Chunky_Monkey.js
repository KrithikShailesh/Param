/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and 
returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let arr1=[];
    let ind=0;
    
    for(let i=0;i<=arr.length-size;i+=size){
      arr1.push(arr.slice(i,i+size));
      ind=i+size;
    }
    
    if(ind!=arr.length){
      arr1.push(arr.slice(ind,));
    }

    return arr1;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));