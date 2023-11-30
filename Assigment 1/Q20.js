// 19.print numbers from 1 to 100 and number must be odd

// normal function
function prime(a){
    for(a=1;a<=100;a++){
        if(a%2!==0){
            document.write(a + ' ')
        }
    }
}
prime( )


// Arrow function
let a = (a) => {
    for(a=1;a<=100;a++){
        if(a%2!==0){
            document.write(a + ' ')
        }
    }
  }
// a()

  

// Anonymous function
let b= function (a){
    for(a=1;a<=100;a++){
        if(a%2!==0){
            document.write(a + ' ')
        }
    }
  }
//   b()



// callback function
function name(e){
    for(a=1;a<=100;a++){
        if(a%2!==0){
            document.write(a + ' ')
        }
    }
  }
//   name('',function (result){
//       document.write(result)
//   })
