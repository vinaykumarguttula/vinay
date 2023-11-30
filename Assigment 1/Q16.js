// 16.check given character is vowel or not


//normal function
function vowel(ch){
    if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"|| ch=="A"|| ch=="E"|| ch=="I"|| ch=="O"|| ch=="U"){
        document.write(ch + " is vowel" + '<br> <br>')
    }else{
        document.write(ch + ' is not a vowel' + '<br> <br>')
    }
}
vowel('E')


// Arrow function
let a = (ch) => {
    if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"|| ch=="A"|| ch=="E"|| ch=="I"|| ch=="O"|| ch=="U"){
        document.write(ch + " is vowel" + '<br> <br>')
    }else{
        document.write(ch + ' is not a vowel' + '<br> <br>')
    }
  }
a('i')

  

// Anonymous function
let b= function (ch){
    if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"|| ch=="A"|| ch=="E"|| ch=="I"|| ch=="O"|| ch=="U"){
        document.write(ch + " is vowel" + '<br> <br>')
    }else{
        document.write(ch + ' is not a vowel' + '<br> <br>')
    }
  }
  b('l')



// callback function
function name(ch){
    if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"|| ch=="A"|| ch=="E"|| ch=="I"|| ch=="O"|| ch=="U"){
        document.write(ch + " is vowel" + '<br> <br>')
    }else{
        document.write(ch + ' is not a vowel' + '<br> <br>')
    }
  }
  name('O',function (result){
      document.write(result)
  })
