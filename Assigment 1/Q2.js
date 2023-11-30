// 2. Find the division of two given numbers


// normal function
function div(a,b){
    document.write(a/b + '<br> <br>')
}
div(25,5)


// Arrow function
let a = (a,b) => {
    return a/b
  }
  document.write(a(45,5) + '<br> <br>')

  

// Anonymous function
let b= function (a,b){
     document.write(a/b + '<br> <br>')
  }
  b(28,4)



// callback function
function name(a,b,callback){
  let s=a/b
  document.write(s +'<br><br>')
      callback(s)
  }
  name(6,7,function (n){
      document.write(n)
  })