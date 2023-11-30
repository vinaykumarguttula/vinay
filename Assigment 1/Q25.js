// 25.find the Emi for the given amount (rate of interest for Emi is 4%)

// normal function
function calculateEMI(principal, interestRate, tenureMonths) {
    const monthlyInterestRate = (interestRate / 12) / 100;
    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
  
    return emi;
  }
  const e = calculateEMI(10000,4,12);
  document.write(`EMI:` + emi + '<br><br>'); 


  // Arrow function
let a = (principal, interestRate, tenureMonths) => {
    const monthlyInterestRate = (interestRate / 12) / 100;
    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
  
  document.write(`EMI:` + emi + '<br><br>'); 
    
  }
  a(10000,4,12);
  

  

// Anonymous function
let b= function (principal, interestRate, tenureMonths){
    const monthlyInterestRate = (interestRate / 12) / 100;
    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
  
  document.write(`EMI:` + emi + '<br><br>'); 
    
  }
b(10000,4,12);


// callback function
// function name(principal, interestRate, tenureMonths){
//     const monthlyInterestRate = (interestRate / 12) / 100;
//     const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths) /
//       (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
  
//     return emi;
//   }
//   name(600,8,9,function (result){
//       document.write(result)
//   })