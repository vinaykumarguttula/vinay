// 37.print the numbers which are not divisible by 2,4, and 6 for given range (start and end value must be taken from the user)


// normal function
function num(){
    start=parseInt(prompt("enter start value"))
    end=parseInt(prompt("enter end value"))
    for(a=start;a<=end;a++){
        if(a%2!=0 && a%4!=0 && a%6!=0)
        document.write(a + "  ")
    }

}
num()



// Arrow function
// let a = () => {
//     start=parseInt(prompt("enter start value"))
//     end=parseInt(prompt("enter end value"))
//     for(a=start;a<=end;a++){
//         if(a%2!=0 && a%4!=0 && a%6!=0)
//         document.write(a + "  ")
//     }
//   }
// a()

  

// Anonymous function
// let b= function (){
//     start=parseInt(prompt("enter start value"))
//     end=parseInt(prompt("enter end value"))
//     for(a=start;a<=end;a++){
//         if(a%2!=0 && a%4!=0 && a%6!=0)
//         document.write(a + "  ")
//     }
//   }
//   b()