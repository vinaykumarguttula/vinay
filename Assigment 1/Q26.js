// 26.find the number of days in the given number of months

// normal function
function months(m){
if(m=='january'||m== 'march'||m== 'may'|| m== 'july' || m== "august" || m== 'october'|| m=='december'){
    document.write(m + " " + " month has 31 days")
}
else if(m=='april'|| m== 'june' || m== 'september' || m== 'november'){
    document.write(m + " " + " month has 30 days")
}
else if(m=='february'){
    document.write(m + " " + " month has 28 or 29 days")
}
else{
    document.write("enter valid month name")

}
}
months('march')


// Arrow function
let a = (m) => {
    if(m=='january'||m== 'march'||m== 'may'|| m== 'july' || m== "august" || m== 'october'|| m=='december'){
        document.write(m + " " + " month has 31 days")
    }
    else if(m=='april'|| m== 'june' || m== 'september' || m== 'november'){
        document.write(m + " " + " month has 30 days")
    }
    else if(m=='february'){
        document.write(m + " " + " month has 28 or 29 days")
    }
    else{
        document.write("enter valid month name")
    
    }
  }
a('april')

  

// Anonymous function
let b= function (m){
    if(m=='january'||m== 'march'||m== 'may'|| m== 'july' || m== "august" || m== 'october'|| m=='december'){
        document.write(m + " " + " month has 31 days")
    }
    else if(m=='april'|| m== 'june' || m== 'september' || m== 'november'){
        document.write(m + " " + " month has 30 days")
    }
    else if(m=='february'){
        document.write(m + " " + " month has 28 or 29 days")
    }
    else{
        document.write("enter valid month name")
    
    }
  }
  b('february')