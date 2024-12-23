let n1 = Number(prompt('Insira o primeiro número: '));
let n2 = Number(prompt('Insira o segundo  número: '));



let soma = n1 + n2 ;
alert(`A soma dos números é ${soma}`);



let subtracao = n1 - n2 
alert(`A subtração dos números é ${subtracao}`);


let multiplicacao = n1 * n2 
alert(`A multiplicação dos números é ${multiplicacao}`);


let divisao = n1 / n2 
alert(`A divisão dos números é ${divisao.toFixed(2)}`);


let resto = n1 % n2 
alert(`O resto dos números é ${resto}`);


let parOuImpar = soma % 2

if(parOuImpar!=0){
    alert(`A soma dos números é ímpar`);
}else{
    alert(`A soma dos números é par`);
}


if(n1==n2){
    alert('Os dois números são iguais')
}else{
    alert('Os dois números são diferentes')
}