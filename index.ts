function multiplicacao(number1 : number, number2:number): number{
    return number1 * number2
}
const resultadoDaMultiplicacao= multiplicacao(2,3);
console.log(resultadoDaMultiplicacao == 6);

function saudacao(nome: string): string{
    return `Olá ${nome}`
}

console.log(saudacao("Lucca"))