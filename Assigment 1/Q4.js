// 4. Find the area of triangle for given data


// normal function
function triangle(h,b){
    document.write((h*b)/2 + '<br> <br>')
}
triangle(15,10)

// Arrow function
let a = (h,b) => {
    return (h*b)/2
  }
  document.write(a(3,25) + '<br> <br>')

  

// Anonymous function
let b= function (h,b){
     document.write((h*b)/2 + '<br> <br>')
  }
  b(4,10)



// callback function
function name(h,b,callback){
  let s=(h*b)/2
      callback(s)
  }
  name(6,7,function (result){
      document.write(result)
  })