// 27.find the number of years for the given number of hours

// normal function
function hour(h){
    if(c=h/8760){
        document.write(c +" years for the given "+ h+ " hours "  + '<br><br>')
    }
}
hour(8500)


// Arrow function
let a = (h) => {
    if(c=h/8760){
        document.write(c +" years for the given "+ h+ " hours "  + '<br><br>')
    }
  }
a(25)

  

// Anonymous function
let b= function (h){
    if(c=h/8760){
        document.write(c +" years for the given "+ h+ " hours " + '<br><br>')
    }
  }
  b(10)
