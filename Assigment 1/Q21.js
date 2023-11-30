// 21.find the remainder of the given two numbers?

// normal function
function remainder(a,b,c){
 document.write(c=a%b + '<br> <br>' )
}
remainder(25,9)


// Arrow function
let a = (a,b,c) => {
        document.write(c=a%b + '<br> <br>' )
       
  }
a(25,6)

  

// Anonymous function
let b= function (a,b,c){
        document.write(c=a%b + '<br> <br>' )
       
  }
  b(10,8)



// callback function
function name(a,b,c){
        document.write(c=a%b + '<br> <br>' )
       
  }
  name(6, 8,function (result){
      document.write(result)
  })
