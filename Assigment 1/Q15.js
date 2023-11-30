// 15.check given data is valid date or not

// normal function
function date(num){
    if(num>0 && num<=30){
        document.write(num  + "given data is valid date" + '<br> <br>')
    }
    else{
        document.write(num  + "given data is not a valid date" + '<br> <br>')

    }
}
date(28)


// Arrow function
let a = (num) => {
    if(num>0 && num<=30){
        document.write(num  + "given data is valid date" + '<br> <br>')
    }
    else{
        document.write(num  + "given data is not a valid date" + '<br> <br>')

    }
  }
a(25)

  

// Anonymous function
let b= function (num){
    if(num>0 && num<=30){
        document.write(num  + "given data is valid date" + '<br> <br>')
    }
    else{
        document.write(num  + "given data is not a valid date" + '<br> <br>')

    }
  }
  b(10)



// callback function
function name(num){
    if(num>0 && num<=30){
        document.write(num  + "given data is valid date" + '<br> <br>')
    }
    else{
        document.write(num  + "given data is not a valid date" + '<br> <br>')

    }
  }
  name(35,function (result){
      document.write(result)
  })
