// 23.find the current bill for the given number of units (domestic-10rs per unit,indurstial-15rs per unit)

// normal function

    function dunits(units){
        document.write(units*10 + " " + " current bill for the given number of units for domestic" + "<br> ")
    }
    dunits(80)

    function iunits(units){
        document.write(units*15 + " " + " current bill for the given number of units for indurstial"  + "<br><br> ")
    }
    iunits(80)

    // arrow function
    let a= (units)=>{
        document.write(units*10 + " " + " current bill for the given number of units for domestic" + "<br> ")

    }
    a(90)
    let b=(units)=>{
        document.write(units*15 + " " + " current bill for the given number of units for indurstial"  + "<br> <br>")

    }
    b(90)


    // Anonymous function
let c= function (units){
    document.write(units*10 + " " + " current bill for the given number of units for domestic" + "<br> ")

  }
  c(10)

  let d=(units)=>{
    document.write(units*15 + " " + " current bill for the given number of units for indurstial"  + "<br> <br>")

}
d(10)
