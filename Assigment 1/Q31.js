// 31.read three angles from the user, decide it is triangle or not


// normal function
function triangle(a,b,c){
    a=parseInt(prompt("enter first angle of a triangle"))
    b=parseInt(prompt("enter second angle of a triangle"))
    c=parseInt(prompt("enter third angle of a triangle"))
    if(a+b+c==180){
        document.write(a+ b+ c + " is equal to 180 deg then it is triangle" + '<br><br>')
    }
    else {
        document.write(a + b + c + "  is not equal to 180 deg then it is not a triangle" +'<br><br>')

    }

}
triangle()



// Arrow function
// let a = (a,b,c) => {
//     a=parseInt(prompt("enter first angle of a triangle"))
//     b=parseInt(prompt("enter second angle of a triangle"))
//     c=parseInt(prompt("enter third angle of a triangle"))
//     if(a+b+c==180){
//         document.write(a+ b+ c + " is equal to 180 deg then it is triangle" + '<br><br>')
//     }
//     else {
//         document.write(a + b + c + "  is not equal to 180 deg then it is not a triangle" +'<br><br>')

//     }
//   }
// a( )

  

// Anonymous function
// let b= function (a,b,c){
//     a=parseInt(prompt("enter first angle of a triangle"))
//     b=parseInt(prompt("enter second angle of a triangle"))
//     c=parseInt(prompt("enter third angle of a triangle"))
//     if(a+b+c==180){
//         document.write(a+ b+ c + " is equal to 180 deg then it is triangle" + '<br><br>')
//     }
//     else {
//         document.write(a + b + c + "  is not equal to 180 deg then it is not a triangle" +'<br><br>')

//     }
//   }
//   b()



// callback function
// function name(a,b,c,callback){
//     a=parseInt(prompt("enter first angle of a triangle"))
//     b=parseInt(prompt("enter second angle of a triangle"))
//     c=parseInt(prompt("enter third angle of a triangle"))
//     if(a+b+c==180){
//         document.write(a+ b+ c + " is equal to 180 deg then it is triangle" + '<br><br>')
//     }
//     else {
//         document.write(a + b + c + "  is not equal to 180 deg then it is not a triangle" +'<br><br>')

//     }
//     callback()
//   }
//   name( function (result){
//       document.write(result)
//   })