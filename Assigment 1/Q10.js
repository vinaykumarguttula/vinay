// 10.Check given number is even or odd

// normal function
function even(e){
    if(e%2==0){
        document.write('even' +'<br> <br>')
    }else{
        document.write('odd' + '<br> <br>')
    }
}
even(10)



// Arrow function
let a = (e) => {
    if(e%2==0){
        document.write('even' +'<br> <br>')
    }else{
        document.write('odd' + '<br> <br>')
    }
  }
a(25)

  

// Anonymous function
let b= function (e){
    if(e%2==0){
        document.write('even' +'<br> <br>')
    }else{
        document.write('odd' + '<br> <br>')
    }
  }
  b(10)



// callback function
function name(e,callback){
    if(e%2==0){
        document.write('even' +'<br> <br>')
    }else{
        document.write('odd' + '<br> <br>')
    }
    callback()
  }
  name(6,function (result){
      document.write(result)
  })