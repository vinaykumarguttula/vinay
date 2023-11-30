// 1. Find the sum of two given numbers


// normal function
function add(a,b){
    document.write(a+b + '<br> <br>')
}
add(4,8)


// Arrow function
let a = (a,b) => {
      return a+b
    }
    document.write(a(3,25) + '<br> <br>')

    

// Anonymous function
let b= function (a,b){
       document.write(a+b + '<br> <br>')
    }
    b(4,10)



// callback function
function name(a,b,callback){
    let s=a+b
    document.write(s + '<br> <br>')
    callback(s)
    }
    name(6,7,function (n){
        document.write(n*n)
    })