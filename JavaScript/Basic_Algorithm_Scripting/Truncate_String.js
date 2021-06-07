/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  
    let s=str.substr(0,num);
    if(num<str.length){
      s+="...";
    }
    return s;
  
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8 ));