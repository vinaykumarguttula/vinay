// 3. find the average of  two given numbers


// normal function
function avg(a,b){
    document.write((a+b)/2 + '<br> <br>')
}
avg(10,30)


// Arrow function
let a = (a,b) => {
    document.write((a+b)/2 + '<br> <br>')
      
    }
    a(20,5)

    

// Anonymous function
let b= function (a,b){
       document.write((a+b)/2 + '<br> <br>')
    }
    b(4,10)



// callback function
function name(a,b,callback){
    let s=(a+b)/2

        callback(s)
    }
    name(6,7,function (r){
        document.write(r)
    })