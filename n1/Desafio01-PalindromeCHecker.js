function palindrome(str) {
  str =str.toLowerCase()
  str = str.replace(/[^a-zA-Z0-9]/g,"")
  let arr = str.split(" ")
  str = arr.join("")
  let result = 0
  let j = str.length-1
  for(let i=0;i<str.length;i++){
    if(str[i] == str[j]){
      result+=1
    }
    j--
  }
  if(result == str.length){  
  return true;
  }else{
  return false
  }
}

palindrome("0_0 (: /-\ :) 0-0");