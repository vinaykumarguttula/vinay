// 9. Find the simple interest for given data


// normal function
function interest(R,P,T){
    document.write((R*P*T)/100 + '<br> <br>')
}
interest(30,5,9)


// Arrow function
let a = (R,P,T) => {
    return (R*P*T)/100
  }
  document.write(a(3,25,6) + '<br> <br>')

  

// Anonymous function
let b= function (R,P,T){
     document.write((R*P*T)/100 + '<br> <br>')
  }
  b(4,10,30)



// callback function
function name(R,P,T,callback){
  let s=(R*P*T)/100
      callback(s)
  }
  name(6,7,9,function (result){
      document.write(result)
  })