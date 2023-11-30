// 24.find the net salary of the employee for given data

// normal function
function netsalary(s,d){
    document.write(s-d + " " + " is a net salary of the employee for given data" + '<br><br>')
}
netsalary(50000,2000)

// Arrow function
let a = (s,d) => {
    document.write(s-d + " " + " is a net salary of the employee for given data" + '<br><br>')

  }
a(25000,9000)

  

// Anonymous function
let b= function (s,d){
    document.write(s-d + " " + " is a net salary of the employee for given data" + '<br><br>')

  }
  b(1000000,4500)



// callback function
function name(s,d){
    document.write(s-d + " " + " is a net salary of the employee for given data" + '<br><br>')

  }
  name(6000,700,function (result){
      document.write(result)
  })