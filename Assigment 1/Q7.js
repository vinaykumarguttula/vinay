// 7.Convert the given meters into milli meters

// normal function
function meters(m){
    document.write(m*1000 + '<br> <br>')
}
meters(20)


// Arrow function
let a = (m) => {
    return m*1000
  }
  document.write(a(25) + '<br> <br>')

  

// Anonymous function
let b= function (m){
     document.write(m*1000 + '<br> <br>')
  }
  b(4)



// callback function
function name(m,callback){
  let s=m*1000
      callback(s)
  }
  name(6,function (result){
      document.write(result)
  })