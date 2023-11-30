// 8.Convert the given rupees into dollars


// normal
function rupees(r){
    document.write(r/82.7143 + '<br> <br>')
}
rupees(10000)


// Arrow function
let a = (r) => {
    return r/82.7143 
  }
  document.write(a(250) + '<br> <br>')

  

// Anonymous function
let b= function (r){
     document.write(r/82.7143  + '<br> <br>')
  }
  b(400)



// callback function
function name(r,callback){
  let s=r/82.7143
      callback(s)
  }
  name(500,function (result){
      document.write(result)
  })