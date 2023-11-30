// 22.find the insuranceamount for given amount (assume insure cerateof percentis 20%)


// normal function
function amount(iamount){
    document.write(iamount/20 + " " + "is a insuranceamount" + '<br><br>')
}
amount(50000)


// Arrow function
let a = (e) => {
    document.write(e/20 + " " + "is a insuranceamount"  + '<br><br>')

  }
a(25000)

  

// Anonymous function
let b= function (e){
    document.write(e/20 + " " + "is a insuranceamount" + '<br><br>')

  }
  b(10000)



// callback function
function name(e){
    document.write(e/20 + " " + "is a insuranceamount" + '<br><br>')

  }
  name(60357,function (result){
      document.write(result)
  })
