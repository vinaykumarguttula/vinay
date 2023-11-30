// 28.find the number of inches for the given meters

// normal function
function meters(m,c){
    if(c=m*39.37){
        document.write(c +" inches for the  "+ m+ " meters " + '<br><br>')
    }
}
meters(10)


// Arrow function
let a = (m,c) => {
    if(c=m*39.37){
        document.write(c +" inches for the  "+ m+ " meters " + '<br><br>')
    }
  }
a(25)

  

// Anonymous function
let b= function (m,c){
    if(c=m*39.37){
        document.write(c +" inches for the  "+ m+ " meters " + '<br><br>')
    }
  }
  b(10)
