//Exercícios de interpretação de código

// 1.

//false
//

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)


//RESOLUÇÃO: a. false ; b. false c. false d. booleano

//2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// O Erro está na concatenação de Strings; O ideal seria utilizar um número por exemplo:

// const primeiroNumero = prompt ("Digite um número!")
// const segundoNumero  = prompt ("Digite outro número")

// const soma = (number (primeiroNumero + segundoNumero))

// console.log (soma)

// TENTEI E NÃO DEU CERTO!
// FICOU ASSIM: index.js:39 Uncaught ReferenceError: number is not defined
    // at index.js:39
    // (anônimo) @ index.js:39
    // 10
    // 1010
    // 10
    // 1010


//DEPOIS OLHEI A RESOLUÇÃO E VI QUE ERA O MESMO RACIOCINIO SÓ QUE MAIS SIMPLES E DIRETO!
// // const soma = Number(primeiroNumero) + Number(segundoNumero)


//Escrita:
// 1.

// let suaIdade = Number (prompt ("Digite sua idade!"))
// let idadeMelhorAmigo = Number (prompt ("Digite a idade do seu melhor amigo!"))
// const idadeResultado = suaIdade >= idadeMelhorAmigo

// console.log ("Sua idade é maior do que seu a do seu melhor amigo?" ,  idadeResultado)

//RESPOSTA : Sua idade é maior do que seu a do seu melhor amigo? true
//[Violation] Forced reflow while executing JavaScript took 31ms
//  *NÃO CONSEGUI CONVERTER !

// 2.

// let numPar = prompt ("Digite um número par")
// console.log ("Resto da divisão por 2" , Number (numPar) % 2)
// //Resto da divisão por 2 0

// let anosIdade = Number (prompt("Quantos anos você tem?"))


// console.log ("Sua idade em anos é: ", anosIdade, "em meses: " , anosIdade*365, "em horas: " , (anosIdade*365)*24 )


//4.

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.


// let numero1 = Number (prompt("Insira um número"))
// const numero2 = Number (prompt( "Insira outro número"))
 
// console.log("O primeiro numero é maior que segundo?", numero1 > numero2)

// console.log ("O primeiro numero é igual ao segundo?", numero1 === numero2)

// console.log ("O primeiro numero é divisível pelo segundo?", nnumero1 % numero2 === 0)

// console.log ("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)

// //RESOLUÇÃO:

// O primeiro numero é maior que segundo? true
// index.js:97 O primeiro numero é igual ao segundo? false
// index.js:99 Uncaught ReferenceError: nnumero1 is not defined
//     at index.js:99
// (anônimo) @ index.js:99

























































// //WARMUP

// const nome = "Chijo"
// const nomeAlterado = nome.toLowerCase ()

// console.log (nomeAlterado)

// const frase = "Hoje assisti Chaves , adoro Chaves!"
// const novaFrase = frase.replaceAll ("Chaves" , "Tarzan")

// console.log (novaFrase)

// const instrutoras = ["Amanda" , "Lais"]
// instrutoras.push ("Chijo")

// console.log (instrutoras)