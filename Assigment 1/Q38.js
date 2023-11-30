// 38.print the number which are divisible by 5 and the number must greater than the 200 for given range (the start must be from 100 and end must not more than 1000, both has to take from the user)



// normal function
function num(){
    start=parseInt(prompt("enter start value greater than 100 "))
    end=parseInt(prompt("enter end  value must be less than 1000"))
    for(a=start;a<=end;a++){
        if(a%5==0 && a>200)
        document.write(a + "  ")
    }

}
num()


// Arrow function
// let a = () => {
//     start=parseInt(prompt("enter start value greater than 100 "))
//     end=parseInt(prompt("enter end  value must be less than 1000"))
//     for(a=start;a<=end;a++){
//         if(a%5==0 && a>200)
//         document.write(a + "  ")
//     }
//   }
// a()

  

// Anonymous function
// let b= function (){
//     start=parseInt(prompt("enter start value greater than 100 "))
//     end=parseInt(prompt("enter end  value must be less than 1000"))
//     for(a=start;a<=end;a++){
//         if(a%5==0 && a>200)
//         document.write(a + "  ")
//     }
//   }
//   b()