// 11. Check given number is positive or negative

// normal function
function positive(p){
    if(p>=0){
    document.write('positive' + '<br> <br>')
    }else{
        document.write('negative' + '<br> <br>')
    }
}
positive(90)


// Arrow function
let a = (p) => {
    if(p>=0){
        document.write('positive' + '<br> <br>')
        }else{
            document.write('negative' + '<br> <br>')
        }
  }
a(-25)

  

// Anonymous function
let b= function (p){
    if(p>=0){
        document.write('positive' + '<br> <br>')
        }else{
            document.write('negative' + '<br> <br>')
        }
  }
  b(10)



// callback function
function name(p){
    if(p>=0){
        document.write('positive' + '<br> <br>')
        }else{
            document.write('negative' + '<br> <br>')
        }
  }
  name(-6,function (result){
      document.write(result)
  })
