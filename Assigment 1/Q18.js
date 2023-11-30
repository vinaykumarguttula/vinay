// 18.print numbers from 1 to 100

// normal function
function numbers(a){
    for(a=1;a<=100;a++){
        document.write(a + ' ')
    }
}
numbers( )

// Arrow function
let a = (a) => {
    for(a=1;a<=100;a++){
        document.write(a + ' ')
    }
  }
// a()

  

// Anonymous function
let b= function (a){
    for(a=1;a<=100;a++){
        document.write(a + ' ')
    }
  }
//   b()



// callback function
function name(a){
    for(a=1;a<=100;a++){
        document.write(a + ' ')
    }
  }
//   name( '',function (result){
//       document.write(result)
//   })

