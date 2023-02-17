/*
STAGE 04 - Desafio 1

Solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

 * A soma dos dois números;
 * A subtração dos dois números;
 * A multiplicação do dois números;
 * A divisão dosm dois numeros;
 * O resto da divisão dos dois números;

DEPOIS INCLUIR:

 * Verificar se a soma dos dois números é par (ou impar);
 * Verificar se os dois números inseridos são iguais (ou diferetes);


*/

let numberOne = Number (prompt('Type a number:'));
let numberTwo = Number (prompt ('Type other number:'));2



alert (`The addition of the two numbers is: ${ numberOne + numberTwo}`);
alert (`The subtraction of the two numbers is: ${numberOne - numberTwo}`);
alert (`The multiplication of the two numbers is: ${numberOne * numberTwo}`);
alert (`The division of the two numbers is: ${numberOne / numberTwo}`);
alert (`The remains of the two numbers is: ${numberOne % numberTwo}`);

let parImpar =(numberOne + numberTwo) % 2

if ( parImpar == 0) {
    alert (`The number ${numberOne + numberTwo} is even (PAR já que meu inglês é o ó)`)
}
else {
    alert (`The number ${numberOne + numberTwo} is odd (IMPAR já q o inglês ... ¬¬)`)
}

if (numberOne == numberTwo) {
    alert('The two numbers chosen are the same!')
}

else {
    alert('The two numbers chosen are different!')
}