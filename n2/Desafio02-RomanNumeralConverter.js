function convertToRoman(num) {
 let romanos = {
   M  :1000,
   CM	:900,
   D	:500,
   CD	:400,
   C	:100,
   XC	:90,
   L	:50,
   XL	:40,
   X	:10,
   IX	:9,
   V	:5,
   IV	:4,
   I	:1,
 }
 let listR = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
 let result = ""
 for(let i=0; i<listR.length;i++){
   if(num>=romanos[listR[i]]){
     result+=listR[i];
     num-=romanos[listR[i]]
     i=-1  
   }
 }
return result
}

convertToRoman(2014);