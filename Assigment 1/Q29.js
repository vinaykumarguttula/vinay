// 29.find the number acres for the given centimetres


// normal function
function cm(acres){
    if(c=acres/40468564.22){
        document.write(c +" acres for the  "+ acres + " centermeters " + '<br><br>')
    }
}
cm(40468564.22)


// Arrow function
let a = (acres) => {
    if(c=acres/40468564.22){
        document.write(c +" acres for the  "+ acres + " centermeters " + '<br><br>')
    }
  }
a(2500000)

  

// Anonymous function
let b= function (acres){
    if(c=acres/40468564.22){
        document.write(c +" acres for the  "+ acres + " centermeters " + '<br><br>')
    }
  }
  b(1067543)