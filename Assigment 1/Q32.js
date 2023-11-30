// 32.read angles from the user, decide it is pentagon or not


// normal function
function pentagon(){
    a=parseInt(prompt("enter first angle of a pentagon"))
    b=parseInt(prompt("enter second angle of a pentagon"))
    c=parseInt(prompt("enter third angle of a pentagon"))
    d=parseInt(prompt("enter fourth angle of a pentagon"))
    e=parseInt(prompt("enter fifth angle of a pentagon"))
    if(a+b+c+d+e==540){
           document.write(a+b+c+d+e + " is equal to 540 deg is a pentagon"  +'<br><br>')
    }
    else{
        document.write(a+b+c+d+e +" is not equal to 540 deg not a pentagon" +'<br><br>')
        
    }

}
pentagon()


// arrow function
// let a = () => {
//     a=parseInt(prompt("enter first angle of a pentagon"))
//     b=parseInt(prompt("enter second angle of a pentagon"))
//     c=parseInt(prompt("enter third angle of a pentagon"))
//     d=parseInt(prompt("enter fourth angle of a pentagon"))
//     e=parseInt(prompt("enter fifth angle of a pentagon"))
//     if(a+b+c+d+e==540){
//            document.write(a+b+c+d+e + " is equal to 540 deg is a pentagon"  +'<br><br>')
//     }
//     else{
//         document.write(a+b+c+d+e +" is not equal to 540 deg not a pentagon" +'<br><br>')
        
//     }
//   }
// a()

  

// Anonymous function
// let b= function (){
//     a=parseInt(prompt("enter first angle of a pentagon"))
//     b=parseInt(prompt("enter second angle of a pentagon"))
//     c=parseInt(prompt("enter third angle of a pentagon"))
//     d=parseInt(prompt("enter fourth angle of a pentagon"))
//     e=parseInt(prompt("enter fifth angle of a pentagon"))
//     if(a+b+c+d+e==540){
//            document.write(a+b+c+d+e + " is equal to 540 deg is a pentagon"  +'<br><br>')
//     }
//     else{
//         document.write(a+b+c+d+e +" is not equal to 540 deg not a pentagon" +'<br><br>')
        
//     }
//   }
//   b()





// callback function
// function pentagon(pen){
//     a=parseInt(prompt("enter first angle of a pentagon"))
//     b=parseInt(prompt("enter second angle of a pentagon"))
//     c=parseInt(prompt("enter third angle of a pentagon"))
//     d=parseInt(prompt("enter fourth angle of a pentagon"))
//     e=parseInt(prompt("enter fifth angle of a pentagon"))
//     if(a+b+c+d+e==pen){
//            document.write(a+b+c+d+e + " is equal to 540 deg is a pentagon" + "<br><br>")
//     }
//     else{
//         document.write(a+b+c+d+e +" is not equal to 540 deg not a pentagon" +'<br><br>')
        
//     }

// }
// pentagon(function(pen=540){
    
// })