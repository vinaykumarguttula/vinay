// 6.Convert  the given seconds into hours

// normal function
function sec(s){
    document.write(s/3600 + '<br> <br>')
}
sec(180)


// Arrow function
let a = (s) => {
    return s/3600
  }
  document.write(a(25) + '<br> <br>')

  

// Anonymous function
let b= function (s){
     document.write(s/3600 + '<br> <br>')
  }
  b(10)



// callback function
function name(s,callback){
  let a=s/3600
      callback(a)
  }
  name(6,function (result){
      document.write(result)
  })