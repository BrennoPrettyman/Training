//----------------------------------------------------------------------------------------

// window.alert("Preparar...");
// window.alert("Apontar...");
// window.alert("FOGO!");
// Exercício "Contagem Regressiva"

//----------------------------------------------------------------------------------------

nome = String(window.prompt("Escreva seu Primeiro Nome:"));
sobrenome = String(window.prompt("Escreva seu sobrenome:"));

document.writeln(`Seu nome completo é: ${nome} ${sobrenome}</br>`);
document.writeln(`Seu nome de Catalogo é: ${sobrenome.toUpperCase()}, ${nome}`);
// Exercício "Nome Completo"

//----------------------------------------------------------------------------------------

// numer = Number(window.prompt("Digite o numerador:"));
// denom = Number(window.prompt("Digite o denominador:"));
// solucão = numer / denom;

// if (denom == 0) {
//     document.write("Não é Possível dividir por 0.");
// }

// else {
//     document.write(`<h1>${numer} dividido por ${denom} é ${solucão}`);
// }
// Exercício "DivisaoJS"

//----------------------------------------------------------------------------------------

// Nota1 = Number(window.prompt("Digite sua Primeira Nota:"))
// Nota2 = Number(window.prompt("Digite sua Segunda Nota:"))
// Nota3 = Number(window.prompt("Digite sua Terceira Nota:"))
// Nota4 = Number(window.prompt("Digite sua Quarta Nota:"))

// if (Nota1 > 10 || Nota1 < 0 ||
//     Nota2 > 10 || Nota2 < 0 ||
//     Nota3 > 10 || Nota3 < 0 ||
//     Nota4 > 10 || Nota4 < 0) {
//     document.write("Digite uma Nota entre 0 e 10.")
// }
// else {
//     solucao = (Nota1 + Nota2 + Nota3 + Nota4) / 4;
//     document.write(`Sua nota é ${solucao} <br>`)
// }

// if (solucao < 4) {
//     document.write("Sua situação é REPROVADO!")
// }
// else if (solucao > 6) {
//     document.write("Sua situação é APROVADO!")
// }
// else {
//     document.write("Sua situação é RECUPERAÇÃO!")
// }
// Exercício "Media4Nota"

//----------------------------------------------------------------------------------------

// n1 = Number(window.prompt("Digite o Multiplicando"));

// while (n1 <= 10) {

//     produto = n1 * n2
//     document.write(`${n1} x ${n2} = ${produto}`)
//     n2 += 1;
// }

// Exercício "Tabuada"

//----------------------------------------------------------------------------------------