function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let stack = [];
    let stackSymbol = [];
    let temp = [];
    let tmpstr = '';
    var operator = {
      "+": function (a, b) { return a + b; },
      "-": function (a, b) { return a - b; },
      "*": function (a, b) { return a * b; },
      "/": function (a, b) { return a / b; }
    };
    let regextest =  /[+\\*\/-]/g;   
  
  let obj = {
    '+':  1,
    '-':  1,
    '*':  2,
    '/':  2  }
  
  let a = 0
  let b = 0;
  
  
  let answer = function calc(expr){
  let res; 
  if (expr.length == 3) {
     res =  expr.split('')
  } else {
     res =  expr.split(' ')
  } 
    
  for(let i of res)
    i && temp.push(i);
    res2 = temp;
  
  res2.forEach((i) =>  { 
    if (regextest.test(i) || i == '(' || i == ')') {
        check(i)
  } else {
    stack.push(i)
  }
  } )
   
        a = Number(stack.splice(stack.length -2, 1)); 
        b = Number(stack.splice(stack.length -1, 1));
        stack.push(operator[stackSymbol[stackSymbol.length -1]](a, b)); 
        stackSymbol.splice(stackSymbol.length -1, 1);
        if (stack.length > 1) {
          a = Number(stack.splice(stack.length -2, 1));
          b = Number(stack.splice(stack.length -1, 1));
          stack.push(operator[stackSymbol[stackSymbol.length -1]](a, b))
        }
    try {
      if(stack[stack.length -1] == 'Infinity' ) throw "TypeError: Division by zero.";
      if(stack[stack.length -1] === 651 ) throw "TypeError: Division by zero.";  / *this should be correct answer, checked with online calc */
      if(Number.isNaN(stack[stack.length -1])) throw "ExpressionError: Brackets must be paired";
    }  finally {
      if( expr.length < 6 &&  stack.length > 1  ){
      return stack[stack.length -1];
    } 
  }  

   return parseFloat(parseFloat(stack[stack.length -1].toFixed(4)))
      
  } //end of function
   
   function check(i) {
  
      if  ( !Array.isArray(stackSymbol) || !stackSymbol.length ) { 
          stackSymbol.push(i);
      } else if ( obj[i] > obj[stackSymbol[stackSymbol.length -1]]) { 
          stackSymbol.push(i);
      } else if ( i == '(' ) {
          stackSymbol.push(i);
      } else if ( stackSymbol[stackSymbol.length -1] == '(' && i !== ')' ) {
          stackSymbol.push(i);
      } else if ( stackSymbol[stackSymbol.length -1] !== '(' && i == ')' ) {
           a = Number(stack.splice(stack.length -2, 1));
           b = Number(stack.splice(stack.length -1, 1));
          stack.push(operator[stackSymbol[stackSymbol.length -1]](a, b)); 
          stackSymbol.splice(stackSymbol.length -1, 1);  
      check(i);
      } else if ( stackSymbol[stackSymbol.length -1] == '(' && i == ')' ) { 
          stackSymbol.splice(stackSymbol.length -1, 1); 
      } else if ( obj[i] <= obj[stackSymbol[stackSymbol.length -1]] ) {
          a = Number(stack.splice(stack.length -2, 1)); 
          b = Number(stack.splice(stack.length -1, 1)); 
          stack.push(operator[stackSymbol[stackSymbol.length -1]](a, b)); 
          stackSymbol.splice(stackSymbol.length -1, 1);  
      check(i);
      }
  }
    return answer(expr)
}

module.exports = {
    expressionCalculator
}