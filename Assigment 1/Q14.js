// 14.check given year is leap year or not?

// normal function
function year(y){
    if((y%400==0) || (y%100!=0 && y%4==0)){
         document.write(y + "is leap year" + '<br> <br>')
    }
    else{
        document.write(y + " is not a leap year"  + '<br> <br>')

    }
}
year(2023)


// Arrow function
let a = (y) => {
    if((y%400==0) || (y%100!=0 && y%4==0)){
        document.write(y  + "is leap year" + '<br> <br>')
   }
   else{
       document.write(y  + "is not a leap year" + '<br> <br>')

   }
  }
a(2003)

  

// Anonymous function
let b= function (y){
    if((y%400==0) || (y%100!=0 && y%4==0)){
        document.write(y  + " is leap year" + '<br> <br>')
   }
   else{
       document.write(y  + "is not a leap year" + '<br> <br>')

   }
  }
  b(2024)



// callback function
function name(y,callback){
    if((y%400==0) || (y%100!=0 && y%4==0)){
        document.write(y  + " is leap year" + '<br> <br>')
   }
   else{
       document.write(y  + "is not a leap year" + '<br> <br>')

   }
   callback(s)
  }
  name(2025,function (result){
      document.write(result)
  })
