// 5.Find the area of circle for given data

// normal function
function circle(r){
    document.write(3.1415*r*r + '<br> <br>')
}
circle(15)



// Arrow function
let a = (r) => {
    return r*r*3.1415
  }
  document.write(a(3) + '<br> <br>')

  

// Anonymous function
let b= function (r){
     document.write(r*r*3.1415 + '<br> <br>')
  }
  b(4)



// callback function
function name(r,callback){
  let s=r*r*3.1415
      callback(s)
  }
  name(6,function (result){
      document.write(result)
  })