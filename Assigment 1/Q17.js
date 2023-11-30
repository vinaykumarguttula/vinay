// 17.check given character is space or not


// normal function
function space(char){
    if (char==' ') {
      document.write(char +' The character is a space.' + '<br> <br>');
    } else {
      document.write(char + ' The character is not a space.' + '<br> <br>');
    }
}
    space(' ')


    // Arrow function
let a = (char) => {
    if (char==' ') {
        document.write(char +' The character is a space.' + '<br> <br>');
      } else {
        document.write(char + ' The character is not a space.' + '<br> <br>');
      }
  }
a(25)

  

// Anonymous function
let b= function (char){
    if (char==' ') {
        document.write(char +' The character is a space.' + '<br> <br>');
      } else {
        document.write(char + ' The character is not a space.' + '<br> <br>');
      }
  }
  b(' ')



// callback function
function name(char){
    if (char==' ') {
        document.write(char +' The character is a space.' + '<br> <br>');
      } else {
        document.write(char + ' The character is not a space.' + '<br> <br>');
      }
  }
  name(6,function (result){
      document.write(result)
  })
