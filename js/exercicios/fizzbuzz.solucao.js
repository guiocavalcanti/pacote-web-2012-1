// Fiz buzz
var numero = parseInt(prompt("Digite um número maior do que 1:"), 10);

for(var i = 1; i < numero; i++){
  var result;

  if((i % 5 === 0) && (i % 3 === 0)) { // por 3 e por 5
    result = "FizzBuzz";
  } else if(i % 5 === 0) {
    result = "Buzz";
  } else if(i % 3 === 0) {
    result = "Fizz"
  } else {
    result = i;
  }

  document.write(result + "<br>");
}
