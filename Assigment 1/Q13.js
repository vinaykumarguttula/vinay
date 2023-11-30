// 13.check given number is divisible by 2,3 and 4 or not


// normal function
function num(n){
    if(n%2==0 && n%3==0 && n%4==0){
        document.write(n + '  is div by 2,3 and 4' + '<br><br>')
    }
    else{
        document.write(n + " is not div by 2,3 and 4" + '<br><br>')
    }
}
num(10)


// Arrow function
let a = (n) => {
    if(n%2==0 && n%3==0 && n%4==0){
        document.write(n + "  is div by 2,3 and 4" + '<br><br>')
    }
    else{
        document.write(n + " is not div by 2,3 and 4" + '<br><br>')
    }
  }
a(12)

  

// Anonymous function
let b= function (n){
    if(n%2==0 && n%3==0 && n%4==0){
        document.write(n + "  is div by 2,3 and 4" + '<br><br>')
    }
    else{
        document.write(n+ " is not div by 2,3 and 4" + '<br><br>')
    }
  }
  b(28)



// callback function
function name(n,callback){
    if(n%2==0 && n%3==0 && n%4==0){
        document.write(n + "  is div by 2,3 and 4" + '<br><br>')
    }
    else{
        document.write(n + " is not div by 2,3 and 4" + '<br><br>')
    }
    callback()
  }
  name(2856,function (result){
      document.write(result)
  })
