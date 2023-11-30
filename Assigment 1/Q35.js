// 35.print the odd number from the given range (start and end value must takefrom the user)


// normal function
function oddnum(){
    start=parseInt(prompt("enter start value"))
    end=parseInt(prompt("enter end value"))
    for(a=start;a<=end;a++){
        if(a%2!=0)
        document.write(a + "  ")
    }

}
oddnum()


// Arrow function
// let a = () => {
//     start=parseInt(prompt("enter start value"))
//     end=parseInt(prompt("enter end value"))
//     for(a=start;a<=end;a++){
//         if(a%2!=0)
//         document.write(a + "  ")
//     }

//   }
// a()

  

// Anonymous function
// let b= function (){
//     start=parseInt(prompt("enter start value"))
//     end=parseInt(prompt("enter end value"))
//     for(a=start;a<=end;a++){
//         if(a%2!=0)
//         document.write(a + "  ")
//     }

//   }
//   b()