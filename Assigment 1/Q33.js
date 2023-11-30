// print the numbers for given range (start and end value must take fromkeyboard)

// normal function
function num(){
    start=parseInt(prompt("enter start value"))
    end=parseInt(prompt("enter end value"))
    for(a=start;a<=end;a++){
        document.write(a + "  " )
    }

}
num()


// arrow function
// let a = () => {
//     start=parseInt(prompt("enter start value"))
//     end=parseInt(prompt("enter end value"))
//     for(a=start;a<=end;a++){
//         document.write(a + "  " )
//     }
//   }
// a()

  

// // Anonymous function
// let b= function (){
//     start=parseInt(prompt("enter start value"))
//     end=parseInt(prompt("enter end value"))
//     for(a=start;a<=end;a++){
//         document.write(a + "  " )
//     }
//   }
//   b()
