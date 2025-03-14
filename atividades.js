// questao 1

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// questao 2

// for(let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// questao 3

// let total = 0;
// for(let i = 1; i <= 100; i++){
//     total += i;
// }
// console.log("Total dos 100 primeiros numeros: ", total);

// questao 4

// let pares = [];
// for(let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         pares.push(i);
//     }
// }
// console.log("Pares de 1 a 50: ", pares);

// questao 5

// for(let i = 10; i >= 0; i--){
//     console.log("Contagem regressiva: ", i);
// }

// questao 6

// let nomes = ["Ana", "Carlos", "Beatriz", "Mateus"];
// for(let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// questao 7

// let impares = [];
// for(let i = 1; i <= 30; i++){
//     if(i % 2 != 0){
//         impares.push(i);
//     }
// }
// console.log("Impares de 1 a 30: ", impares);

// questao 8

// let fatorial = 1;
// for(let i = 1; i <= 5; i++){
//     fatorial *= i;
// }
// console.log("Fatorial de 5: ", fatorial);

// questao 10

let espacos = 4;
for(let i = 1; i <= 7; i += 2){
    console.log(" ".repeat(espacos -= 1)+"*".repeat(i));
    
}

