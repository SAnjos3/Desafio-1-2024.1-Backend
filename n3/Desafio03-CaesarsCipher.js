function rot13(str) {
  let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ""
  for(let i in str){
    if(alfabeto.includes(str[i])){
      let loc = alfabeto.indexOf(str[i])+13
      if(loc>=26){
        loc -= 26
        result+=alfabeto[loc]
      }else{
        result+=alfabeto[loc]
      }
    }else{
      result+=str[i]
    }
  }
  return result;
}

rot13("SERR PBQR PNZC");