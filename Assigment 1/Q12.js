// 12.Check given number is divisible by 5 or not


// normal function
function div5(n){
    if(n%5==0){
        document.write('divisible by 5' + '<br> <br>')
    }else{
        document.write('not' + '<br> <br>')
    }
}
div5(25)


// Arrow function
let a = (n) => {
    if(n%5==0){
        document.write('divisible by 5' + '<br> <br>')
    }else{
        document.write('not' + '<br> <br>')
    }
  }
a(25)

  

// Anonymous function
let b= function (n){
    if(n%5==0){
        document.write('divisible by 5' + '<br> <br>')
    }else{
        document.write('not' + '<br> <br>')
    }
  }
  b(10)



// callback function
function name(n){
    if(n%5==0){
        document.write('divisible by 5' + '<br> <br>')
    }else{
        document.write('not' + '<br> <br>')
    }
  }
  name(6,function (result){
      document.write(result)
  })
