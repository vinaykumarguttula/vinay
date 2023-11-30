// 30.for check given data is triangle/square/pentagon based on the number ofsides


// normal function
function sides(s){
    if(s==3){
        document.write(s + " is a triangle" +'<br><br>')
    }
    else if(s==4){
        document.write(s + " is a square"  +'<br><br>')

    }
    else if(s==5){
        document.write(s + " is a pentagon"  +'<br><br>')
    }
    else{
        document.write("enter correct sides"  +'<br><br>')
    }
}
sides(4)


// Arrow function
let a = (s) => {
    if(s==3){
        document.write(s + " is a triangle" +'<br><br>')
    }
    else if(s==4){
        document.write(s + " is a square"  +'<br><br>')

    }
    else if(s==5){
        document.write(s + " is a pentagon"  +'<br><br>')
    }
    else{
        document.write("enter correct sides"  +'<br><br>')
    }
  }
a(25)

  

// Anonymous function
let b= function (s){
    if(s==3){
        document.write(s + " is a triangle" +'<br><br>')
    }
    else if(s==4){
        document.write(s + " is a square"  +'<br><br>')

    }
    else if(s==5){
        document.write(s + " is a pentagon"  +'<br><br>')
    }
    else{
        document.write("enter correct sides"  +'<br><br>')
    }
  }
  b(3)